import React from "react";
import Link from "next/link"; // Import Link component

const Services = () => {
  const servicesData = [
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

  return (
    <div>
      <h2>We provide these services</h2>
      <div className="flex">
        {servicesData.map((service) => (
          <div key={service.id} className="">
            <h3>{service.serviceName}</h3>
            <div className="cursor-pointer">
              <Link href={`service/${service.id}`}>
                <img src={service.image} alt={service.serviceName} />
              </Link>
            </div>

            <p>{service.serviceDetails}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
