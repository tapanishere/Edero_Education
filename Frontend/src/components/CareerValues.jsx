import React from "react";
import {
  HiAcademicCap,
  HiShieldCheck,
  HiUserGroup,
  HiLightBulb,
  HiArrowRight,
} from "react-icons/hi";

const coreValues = [
  {
    id: "student-centric",
    title: "Student Centric",
    description:
      "We prioritize students' needs and success in all our decisions and actions.",
    icon: HiAcademicCap,
  },
  {
    id: "integrity",
    title: "Integrity & Transparency",
    description:
      "We uphold honesty, transparency, and ethical practices in our work.",
    icon: HiShieldCheck,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "We work together as a team and support each other's growth.",
    icon: HiUserGroup,
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to continuously improve our services.",
    icon: HiLightBulb,
  },
];

const CareerValues = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
            Core Values
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See what drives us and defines our culture at Edero Education.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="group bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 transition-colors hover:border-slate-300 hover:bg-white"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500/15 transition-colors">
                  <value.icon className="w-6 h-6 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default CareerValues;
