import React from "react";
import logo1 from '../assets/images/logo1.jpeg'
import logo2 from '../assets/images/logo2.jpg'
import logo3 from '../assets/images/logo3.jpg'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
const accreditations = [
  {
    title: "UGC-entitled Online Degrees Equivalent to Campus Degree",
    img:logo1,
  },
  {
    title: "AICTE & AIU Norms Compliant",
    img: logo2,
  },
  {
    title: "Globally Recognized Online Degrees",
    img: logo3,
  },
  {
    title: "NAAC A+ Accredited University",
    img: logo4,
  },
  {
    title: "Amongst India’s Top 100 Universities in 2024",
    img: logo5,
  },
  {
    title: "Member of Association of Commonwealth Universities",
    img: logo6,
  },
];

const AccreditationPremium = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.35]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-400 sm:w-16" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
              Our Recognitions
            </p>
            <span className="h-px w-10 bg-amber-400 sm:w-16" />
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Recognitions & Accreditations
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Our programs are recognized by leading education authorities and
            trusted by top universities across India.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {accreditations.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* Floating check */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                ✓
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.img}
                  alt=""
                  className="h-14 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Text */}
              <p className="text-center text-lg font-semibold text-slate-800 leading-snug">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AccreditationPremium;