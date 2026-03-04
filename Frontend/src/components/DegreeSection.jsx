import React from "react";

const DegreeSection = () => {
  const undergraduatePrograms = [
    {
      code: "BBA",
      name: "Bachelor of Business Administration",
      description:
        "Holistic business program with strong industry connections and practical learning.",
      duration: "3 Years",
    },
    {
      code: "BCA",
      name: "Bachelor of Computer Applications",
      description:
        "Career-ready program in computer science, data structures, and modern frameworks.",
      duration: "3 Years",
    },
    {
      code: "BA",
      name: "Bachelor of Arts",
      description:
        "Flexible program with interdisciplinary focus on humanities and social sciences.",
      duration: "3 Years",
    },
    {
      code: "B.Com",
      name: "Bachelor of Commerce",
      description:
        "Comprehensive commerce degree with focus on finance, accounting, and taxation.",
      duration: "3 Years",
    },
  ];

  const postgraduatePrograms = [
    {
      code: "MBA",
      name: "Master of Business Administration",
      description:
        "Industry-aligned MBA with specializations, live projects, and leadership focus.",
      duration: "2 Years",
    },
    {
      code: "MCA",
      name: "Master of Computer Applications",
      description:
        "Advanced program in software engineering, data science, and cloud technologies.",
      duration: "3 Years",
    },
    {
      code: "MA",
      name: "Master of Arts",
      description:
        "Deep dive into humanities with research-driven curriculum and electives.",
      duration: "2 Years",
    },
    {
      code: "M.Com",
      name: "Master of Commerce",
      description:
        "Advanced commerce program with focus on analytics, taxation, and corporate finance.",
      duration: "2 Years",
    },
  ];

  const renderCard = (program) => (
    <div
      key={program.code}
      className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-md md:p-6"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <span className="text-xl">🎓</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {program.code}
            </p>
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              {program.name}
            </h3>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
          {program.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700">
            ⏱
          </span>
          <span>{program.duration}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
            Our Programs
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Our Online Degree Programs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-500 sm:text-sm md:text-base">
            All programs delivered through accredited and government-recognized
            institutions with flexible, learner-centric schedules.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Undergraduate */}
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm sm:p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  Undergraduate
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Build a strong foundation with flexible, job-ready degrees.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {undergraduatePrograms.map(renderCard)}
            </div>
          </div>

          {/* Postgraduate */}
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm sm:p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  Postgraduate
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Advance your career with specialized, industry-relevant
                  programs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {postgraduatePrograms.map(renderCard)}
            </div>
          </div>
        </div>
          <div className="mt-10 flex justify-center">

      <button className=" m-auto inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore Programs
            </button>
          </div>
      </div>
    </section>
  );
};

export default DegreeSection;