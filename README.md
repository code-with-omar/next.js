This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Chapter One -> Routing

### 1.1 `Creating a page`

A page is UI that is rendered on a specific route. To create a page, add a page file inside the app directory and default export a React component. For example, to create an index page (/):

![Alt text](documentation_image/route-1.png)

### 1.2 `<Link> Component`

<Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.

```javascript

import Link from "next/link";


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

  const userLoggin = false;

  console.log(pathName);

  const handleNavigation = () => {
    if (userLoggin) {
      route.push("/dashboard");
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
     
      </ul>
    </nav>
  );
};

export default Navbar;
```
