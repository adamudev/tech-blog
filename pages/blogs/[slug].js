import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "techBlog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "techBlog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: items[0],
    },
    revalidate: 1,
  };
}

const BlogDetails = ({ blog }) => {
  if (!blog) return <Skeleton />;
  const { title, featuredImage, contentBody } = blog.fields;
  return (
    <div>
      <div className="banner">
        <Image
          src={`https://${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt="banner"
        />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>{documentToReactComponents(contentBody)}</p>
      </div>
      <style jsx>{`
        .banner h2 {
          margin: 0;
          background-color: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .info p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
