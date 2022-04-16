import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "techBlog",
  });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Home({ blogs }) {
  console.log(blogs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Blog</title>
        <meta name="description" content="Tech Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="blogList">
          {blogs.map((blog) => (
            <BlogCard key={blog.sys.id} blog={blog} />
          ))}
        </div>
      </main>
      <style jsx>{`
        .blogList {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px 60px;
        }

        @media screen and (min-width: 1024px) {
          .blogList {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
