"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  ];
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <h6>Logo</h6>
      <ul className="flex justify-between items-center space-x-4 ">
        {links?.map((link) => (
          <Link
            className={`${
              pathName === link.path && "text-white"
            } hover:text-white`}
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button></button>
    </nav>
  );
};

export default Navbar;
