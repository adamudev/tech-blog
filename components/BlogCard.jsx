import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const { title, slug, featuredImage, excepts, contentBody } = blog.fields;

  return (
    <div className="blogCard">
      <div className="featuredImage">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt="image"
          width={"600px"}
          height={"400px"}
        />
      </div>
      <div className="content">
        <div className="info">
          <h3>{title}</h3>
          <p>{excepts}</p>
        </div>
        <div className="actions">
          <Link href={`/blogs/${slug}`} passHref>
            <a>Read More ...</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .blogCard {
          transform: rotateZ(-1deg);
        }

        .content {
          background-color: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }

        .info {
          padding: 16px;
        }

        .info h3 {
          marginf: 4px 0;
          text-transform: uppercase;
        }

        .info p {
          margin: 0;
          color: #777;
        }

        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background-color: #34fa23;
          padding: 10px 24px;
          text-decoration: none;
          transition: all 0.25s;
        }

        .actions a:hover {
          background-color: #ccc;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
