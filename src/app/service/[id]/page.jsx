import React from "react";

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
