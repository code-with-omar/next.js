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

## Chapter One ->File conversion

### 1.1 Not Found page -> not-found.js/not-found.jsx/not-found.tsx

The not-found file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI, Next.js will return a 200 HTTP status code for streamed responses, and 404 for non-streamed responses.`This component will be write in app route. Components name must be  {not-found.js/not-found.jsx/not-found.tsx} these formate`

```javascript
<div className="w-1/2 mx-auto">
  <h2>Not Found</h2>
  <p>Could not find requested resource</p>
  <Link href="/">Return Home</Link>
</div>
```

Note: If we have dynamic router it must validation for 404 page. so, we can `conditional randering`

```javascript
import React from "react";

export default function ServiceById({ params }) {
  const serviceData = [
    {
      id: "trpshg1kjfgh2348dflk2g",
      image: "/women.png", // Use the relative path to public folder
      serviceName: "Digital Marketing",
      serviceDetails:
        "We help you grow your business by creating effective digital marketing strategies that drive engagement and sales.",
    },
  ];
  const findService = serviceData.find((service) => params.id === service.id);
  if (findService) {
    return (
      <div>
        <h2>{findService.serviceName}</h2>
        <img src={findService.image} alt="" />
        <p>{findService.serviceDetails}</p>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 mx-auto">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    );
  }
}
```

## Chapter rwo -> Routing

### 2.1 `Creating a page`

A page is UI that is rendered on a specific route. To create a page, add a page file inside the app directory and default export a React component. For example, to create an index page (/):

![Alt text](documentation_image/route-1.png)

### 2.2 `<Link> Component`

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

  const pathName = usePathname(); // This hood find the current path of the rounter and store in pathName varialable

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

### 2.3 `useRouter() hook`

The useRouter hook allows you to programmatically change routes from Client Components.

```javascript
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const route = useRouter(); // it must be import from next/navigation
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
        <button
          type="button"
          onClick={handleNavigation}
          className={`${
            pathName === "dashboard" ? "text-white" : ""
          } hover:text-white`}
        >
          Dashboard
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
```

### 2.4 `Dynamic Route`

A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].

Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.
For example, a service could include the following route service/service/[slug]/page.js where [slug] is the Dynamic Segment for service page. Below example page in service/[id]/page.jsx

```javascript
export default function ServiceById({ params }) {
  const serviceData = [
    {
      id: "abchekdhw1dfdfoiefdfb",
      image: "/man.png", // Use the relative path to public folder
      serviceName: "Web Development",
      serviceDetails:
        "We provide custom web development services using modern technologies like React, Next.js, and Node.js.",
    },
    {
      id: "xzvtu7ujf9isjdu29gkrz",
      image: "/women.png", // Use the relative path to public folder
      serviceName: "Mobile App Development",
      serviceDetails:
        "Our team builds responsive and high-performance mobile apps for both Android and iOS platforms.",
    },
    {
      id: "qwsdfghy12jkl8plmno33z",
      image: "/man.png", // Use the relative path to public folder
      serviceName: "SEO Optimization",
      serviceDetails:
        "Boost your website's visibility with our SEO optimization services, ensuring better rankings and organic traffic.",
    },
    {
      id: "trpshg1kjfgh2348dflk2g",
      image: "/women.png", // Use the relative path to public folder
      serviceName: "Digital Marketing",
      serviceDetails:
        "We help you grow your business by creating effective digital marketing strategies that drive engagement and sales.",
    },
  ];
  const findService = serviceData.find((service) => params.id === service.id); // params.id contain the dymanic id
  console.log(findService);
  return (
    <div>
      <h2>{findService.serviceName}</h2>
      <img src={findService.image} alt="" />
      <p>{findService.serviceDetails}</p>
    </div>
  );
}
```
