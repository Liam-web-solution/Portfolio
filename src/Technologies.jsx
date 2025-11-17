
import React from 'react';
import html5Img from './htmllogo.webp';
import cssImg from './csslogo.png';
import jsImg from './javascriptlogo.jpg';
import tailwindImg from './Tailwindlogo.png';
import reactImg from './reactlogo.png';
import supabaseimg from './supabaselogo.jpg'

function Technologies() {
  const tech = [
    { name: "HTML5", logo: html5Img },
    { name: "CSS3 / Flexbox", logo: cssImg },
    { name: "JavaScript", logo: jsImg },
    { name: "Tailwind CSS", logo: tailwindImg },
    { name: "React", logo: reactImg },
    { name: "Supabase", logo: supabaseimg },
  ];

  return (
    <section className="py-10 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-white text-lg sm:text-xl font-medium mb-6">
          Technologies Used
        </h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {tech.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[10rem] flex-1 md:flex-none rounded-lg border border-slate-700/40 p-4 text-slate-300 flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
            >
              {/* Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-800/60 flex items-center justify-center overflow-hidden md:flex-wrap">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Tech Name */}
              <div className="text-sm sm:text-base">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
