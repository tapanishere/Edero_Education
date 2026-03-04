import React from "react";
import groth from '../assets/images/groth.png'
import flexible from '../assets/images/Flexible.jpg'
import Benifits from '../assets/images/Benifits.svg'
import team from '../assets/images/team.png'
import impact from '../assets/images/impact.jpg'
const features = [
  {
    image:groth,
    title: "Career Growth",
    desc: "Learning & Promotion",
  },
  {
    image:Benifits,
    title: "Attractive Benefits",
    desc: "Health, Incentives & More",
  },
  {image:flexible,
    title: "Flexible Work",
    desc: "Hybrid & Remote",
  },
  {
    image:team,
    title: "Team Culture",
    desc: "Collaborate & Inspire",
  },
  {
    image:impact,
    title: "Impactful Work",
    desc: "Shape Education",
  },
];

const CareerWhyus = () => {
  return (
    <section className="w-full bg-linear-to-br from-slate-50 via-white to-slate-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-2 md:space-y-3 mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Why Join Us?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Grow with a{" "}
            <span className="font-semibold text-amber-600">
              Trusted EdTech Brand
            </span>{" "}
            committed to{" "}
            <span className="font-semibold text-amber-600">
              Excellence &amp; Innovation
            </span>
            .
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-center items-center rounded-2xl bg-white/80 px-4 py-5 sm:px-5 sm:py-6 shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-amber-200"
            >
              
                <img src={item.image}  className="h-10 w-10" />
                <h3 className="text-sm sm:text-base  font-semibold text-slate-900">
                  {item.title}
                </h3>
                <span className="h-px w-10 bg-amber-400 sm:w-25 " />
              <p className="text-xs sm:text-sm text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerWhyus;

