import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>.Tech</span>
              <span>News</span>
            </h1>
            <h2>as it happens.</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright {new Date().getFullYear()} - .tech NEWS</p>
      </footer>
    </div>
  );
};

export default Layout;
