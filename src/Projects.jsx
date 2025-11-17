
import React, { useState } from "react";
import ecommerceImg from "./ecommerce.jpg";
import acid from "./sulphuric.jpg";
import bmiImg from "./BMI.png";
import procurementImg from "./procurement.jpg";

function ShowMoreText({ text }) {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 120;

  const displayed = showMore ? text : text.slice(0, MAX_LENGTH) + ".....";

  return (
    <div>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
        {displayed}
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-400 text-sm hover:underline mt-1"
      >
        {showMore ? "show less" : "show more"}
      </button>
    </div>
  );
}

function Projects() {
  const supplify = [
    {
      id: 1,
      description:
        "'SUPPLIFY' a web app that lets manufacturers, producers signin and securely send supply requests to eCommerce procurement managers using Supabase authentication, with all data stored and managed in the Supabase backend for efficient supplier communication and tracking. (REACT, TAILWIND CSS, SUPABASE)",
      image: procurementImg,
    },
  ];

  const ecommerce = [
    {
      id: 2,
      description:
        "A fully functional eCommerce store with a seamless user flow from product selection to checkout. Customers navigate pages, interact with hover states, manage their cart. (JAVASCRIPT, HTML5, CSS3)",
      image: ecommerceImg,
    },
  ];

  const standardizer = [
    {
      id: 3,
      description:
        "'Standardizer' is a compact, high-accuracy programme designed to streamline standardization of acids and base for titration process. Whether you’re standardizing acids or bases, it delivers fast, precise and accurate results with minimal human error. (REACT, TAILWIND CSS)",
      image: acid,
    },
  ];

  const bmis = [
    {
      id: 4,
      description:
        "'BMI Calculator' helps Hospitals and gyms quickly assess body health with instant, accurate results. Beyond just numbers, it gives personalized advice to help users manage weight. (JAVASCRIPT, HTML5, CSS3)",
      image: bmiImg,
    },
  ];

  return (
    <section id="portfolio" className="py-14 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-8 text-center sm:text-left">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-4 max-lg:grid-cols-2 gap-4">
          {/* SUPPLIFY */}
          {supplify.map((work) => (
            <article
              key={work.id}
              className="rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
             
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                   <a href="https://Liam-web-solution.github.io/supplify/">
                  <img
                    src={work.image}
                    alt={work.description}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                   </a>
                  
                </div>

                <div className="p-4 sm:p-5">
                  <ShowMoreText text={work.description} />
                </div>
             
            </article>
          ))}

          {/* E-COMMERCE */}
          {ecommerce.map((project) => (
            <article
              key={project.id}
              className="rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                  <a href="https://liam-web-solution.github.io/E-commerce-website/">
                  <img
                    src={project.image}
                    alt={project.description}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  </a>
                  
                </div>

                <div className="p-4 sm:p-5">
                  <ShowMoreText text={project.description} />
                </div>
              
            </article>
          ))}

          {/* STANDARDIZER */}
          {standardizer.map((item) => (
            <article
              key={item.id}
              className="rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                  <a href="https://liam-web-solution.github.io/Chemstandardiser/">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  </a>
                </div>

                <div className="p-4 sm:p-5">
                  <ShowMoreText text={item.description} />
                </div>
              
            </article>
          ))}

          {/* BMI */}
          {bmis.map((bmi) => (
            <article
              key={bmi.id}
              className="rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                  <a href="https://liam-web-solution.github.io/BMI-Calculator/">
                  <img
                    src={bmi.image}
                    alt={bmi.description}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  </a>
                  
                </div>

                <div className="p-4 sm:p-5">
                  <ShowMoreText text={bmi.description} />
                </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
