import React from "react";

const DegreeSection = () => {
  const undergraduatePrograms = [
    {
      code: "BCom",
      name: "Online BCom",
      description:
        "Acquire comprehensive knowledge in commerce, finance, and accounting.",
      duration: "3 Years",
    },
    {
      code: "BCA",
      name: "Online BCA",
      description:
        "Master the fundamentals of computer applications and IT systems.",
      duration: "3 Years",
    },
    {
      code: "BBA",
      name: "Online BBA",
      description:
        "Develop strong leadership, strategy, and business management skills.",
      duration: "3 Years",
    },
    {
      code: "BA",
      name: "Online BA",
      description:
        "Explore humanities and social sciences with a flexible curriculum.",
      duration: "3 Years",
    },
  ];

  const postgraduatePrograms = [
    {
      code: "Masters",
      name: "Master's Programs",
      description:
        "Advance your career with flexible, industry-aligned online postgraduate degrees.",
      duration: "2–3 Years",
    },
    {
      code: "PGDM",
      name: "Online PGDM",
      description:
        "Master essential management principles with a practice-oriented approach.",
      duration: "2 Years",
    },
    {
      code: "PGD",
      name: "Online PG Diploma",
      description:
        "Upskill quickly with focused, outcome-driven postgraduate diplomas.",
      duration: "1 Year",
    },
    {
      code: "MCA",
      name: "Online MCA",
      description:
        "Gain deep expertise in modern software development, data, and cloud.",
      duration: "3 Years",
    },
  ];

  const ProgramCard = ({ program }) => {
    return (
      <div className="group flex min-w-[260px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-md sm:p-6">
        <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          {program.code}
        </div>
        <h3 className="mb-2 text-base font-semibold text-slate-900 sm:text-lg">
          {program.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
          {program.description}
        </p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>{program.duration}</span>
          <span className="font-medium text-emerald-600">NAAC Approved</span>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
            Our Flexible
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Our Flexible{" "}
            <span className="text-slate-600">Online Programs</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-500 sm:text-sm md:text-base">
            Choose from a wide range of accredited postgraduate and
            undergraduate online degree programs that fit your schedule.
          </p>
        </div>

        {/* Postgraduate section */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 sm:p-7 md:p-9">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:items-stretch">
            {/* Featured Master's card */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-7 md:p-8">
              <div className="space-y-3">
                <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  Postgraduate
                </span>
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Master&apos;s Programs
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Advance your career with comprehensive, flexible online
                  postgraduate degrees designed with industry experts.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  MBA · MCA · MA · M.Com · Live sessions · Placement support
                </p>
                <button className="w-fit rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                  Explore
                </button>
              </div>
            </div>

            {/* Scrollable PG cards */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent sm:w-16" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent sm:w-16" />

              <div className="flex gap-4 overflow-x-auto pb-2 pt-1 sm:gap-5">
                {postgraduatePrograms.map((program) => (
                  <ProgramCard key={program.code} program={program} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Undergraduate section */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-sky-50 px-5 py-8 text-slate-900 sm:px-7 md:px-9 md:py-10">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] lg:items-stretch">
            {/* Scrollable UG cards */}
            <div className="relative order-2 lg:order-1">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold sm:text-lg">
                    Undergraduate Programs
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    Build a strong foundation with future-ready online
                    bachelor&apos;s degrees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-3 pt-1 sm:gap-5 sm:pb-4 md:pb-5">
                {undergraduatePrograms.map((program) => (
                  <ProgramCard key={program.code} program={program} />
                ))}
              </div>
            </div>

            {/* Featured Undergraduate card */}
            <div className="order-1 flex flex-col justify-between rounded-xl border border-sky-200 bg-white p-6 text-slate-900 sm:p-7 md:p-8 lg:order-2">
              <div className="space-y-3">
                <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  Undergraduate
                </span>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Undergraduate Programs
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Pursue excellence with one of our online undergraduate
                  programs and kickstart your career with globally recognized
                  degrees in business, technology, and the arts.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  BCom · BCA · BBA · BA · Expert faculty · Career guidance
                </p>
                <button className="w-fit rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-100">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default DegreeSection;