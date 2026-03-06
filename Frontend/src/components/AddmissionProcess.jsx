import React from "react";

const steps = [
  {
    id: 1,
    title: "Choose Program",
    description:
      "Choose the program and register by filling in your basic details",
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Provide Details",

    description:
      "Fill in your educational & work experience-related details",
    iconBg: "bg-orange-100",
  },
  {
    id: 3,
    title: "Pay Program Fee",
    description:
      "Pay the admission fee for the first semester/year or full program.",
    iconBg: "bg-sky-100",
  },
  {
    id: 4,
    title: "Upload Documents",
    description:
      "Upload documents & submit to complete your application!",
    iconBg: "bg-indigo-100",
  },
];

const AddmissionProcess = () => {
  return (
    <section className="w-full bg-linear-to-b from-slate-50 to-slate-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-medium tracking-wide text-sky-600 uppercase">
            Simple Admission Process
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
            Start Your Online Degree in Just{" "}
            <span className="text-sky-600 font-bold">4 Steps</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            Our career experts guide you from choosing the right program to
            completing your admission smoothly.
          </p>
        </div>

        {/* Number line (desktop) */}
        <div className="relative mt-10 hidden md:block">
          <div className="absolute inset-x-10 top-6 h-0.5 bg-linear-to-r from-sky-200 via-sky-300 to-sky-200 rounded-full" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-sky-100">
                  <span className="text-lg font-semibold text-sky-600">
                    {step.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col h-full rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Step header (mobile number + title) */}
              <div className="flex md:hidden items-center gap-3 px-4 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 text-sm font-semibold shadow-sm">
                  {step.id}
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
              </div>

              {/* Image placeholder / icon area */}
              <div
                className={`mx-4 mt-3 mb-3 h-28 rounded-xl ${step.iconBg} flex items-center justify-center overflow-hidden`}
              >
                {/* Placeholder content - replace with actual <img> if needed */}
                <div className="w-full h-full bg-linear-to-tr from-slate-100/60 via-white/70 to-sky-50 rounded-xl border border-white/70 shadow-inner flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    Step {step.id} Illustration
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 pt-1 md:pt-0 flex flex-col gap-1.5 flex-1">
                <h4 className="hidden md:block text-sm font-semibold text-slate-900">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddmissionProcess;

