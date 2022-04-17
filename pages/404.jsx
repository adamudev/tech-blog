import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Ooooops! That page cannot be found :(</h2>
      <p>
        Redirecting to the <Link href="/">Homepage</Link>
      </p>

      <style jsx>{`
        .notFound {
          background-color: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 48px;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
