"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Add Products",
      path: "/products/add",
    },
  ];

  const pathName = usePathname();
  const route = useRouter();
  const userLoggin = true;
  const handleNavigation = () => {
    if (userLoggin) {
      route.push("/user-dashboard");
    } else {
      route.push("/");
    }
  };

  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <h6>Logo</h6>
      <ul className="flex justify-between items-center space-x-4">
        {links.map((link) => (
          <Link
            className={`${
              pathName === link.path ? "text-white" : ""
            } hover:text-white`}
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
        <button
          type="button"
          onClick={handleNavigation}
          className={`${
            pathName === "dashboard" ? "text-white" : ""
          } hover:text-white`}
        >
          Dashboard
        </button>
        <LoginButton>LogIn</LoginButton>
      </ul>
    </nav>
  );
};

export default Navbar;
