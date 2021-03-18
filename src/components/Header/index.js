import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets/img";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-white min-h-14 py-4 px-4">
      <section className="flex container mx-auto items-center">
        <section className="flex-1">
          <img src={logo} className="w-12 h-12" alt="Logo" />
        </section>
        <section className="flex flex-1 flex-row space-x-10 justify-between">
          <Link
            to="/"
            className={`text-lg subpixel-antialiased ${
              location.pathname === "/"
                ? "text-primary underline-active font-semibold"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className={`text-lg subpixel-antialiased ${
              location.pathname === "/templates"
                ? "text-primary underline-active font-semibold"
                : ""
            }`}
          >
            Templates
          </Link>
          <Link
            to="/blogs"
            className={`text-lg subpixel-antialiased ${
              location.pathname === "/blogs"
                ? "text-primary underline-active font-semibold"
                : ""
            }`}
          >
            Blogs
          </Link>
        </section>
        <section className="flex flex-1 justify-end">
          <button className="bg-primary hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white py-2 px-6 rounded">
            Login
          </button>
        </section>
      </section>
    </header>
  );
}

export default Header;
