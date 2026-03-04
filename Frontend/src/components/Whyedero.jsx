import React from "react";

const features = [
  {
    code: "OF",
    title: "100% Online & Flexible",
    description:
      "Flexible online and hybrid programs designed to fit your schedule.",
  },
  {
    code: "PA",
    title: "Placement Assistance",
    description:
      "Career support with resume building, mock interviews, and placement help.",
  },
  {
    code: "EMI",
    title: "Easy EMI Options",
    description:
      "Simple EMI plans and financing options to make education affordable.",
  },
  {
    code: "AI",
    title: "AI‑Focused Curriculum",
    description:
      "Industry‑relevant, AI‑driven courses and programs for future‑ready careers.",
  },
];

const Whyedero = () => {
  return (
    <section className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Why Edero Education?
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base max-w-2xl mx-auto">
            Discover what makes our programs unique — flexibility, career
            support, and an AI‑powered learning experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-amber-400/80"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold tracking-wide text-slate-900">
                {item.code}
              </div>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyedero;