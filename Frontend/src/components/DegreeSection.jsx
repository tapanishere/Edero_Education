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
      key={`${program.code}-${program.name}-${program.duration}-${Math.random()}`}
      className="group h-full relative flex min-w-[240px] max-w-sm flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:shadow-amber-200/40 md:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-80">
        <div className="absolute -inset-16 bg-[conic-gradient(at_top,#fbbf24_0deg,#22d3ee_120deg,#6366f1_240deg,#f97316_360deg)] opacity-40 mix-blend-screen" />
      </div>

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-amber-300/60">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <p className="inline-flex items-center rounded-full bg-slate-900/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                {program.code}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                {program.name}
              </h3>
            </div>
          </div>

          <div className="hidden text-[10px] font-medium text-slate-400 sm:inline-flex">
            Online Degree
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
          {program.description}
        </p>
      </div>

      <div className="relative mt-4 flex items-center justify-between text-[11px] text-slate-500 sm:mt-5 sm:text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 text-[11px] font-semibold text-slate-700 transition-colors group-hover:bg-amber-100 group-hover:text-amber-700">
            ⏱
          </span>
          <span className="font-medium">{program.duration}</span>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          NAAC / UGC Approved
        </span>
      </div>
    </div>
  );

  const renderScrollingRow = (programs, direction = "left") => {
    const duplicated = [...programs, ...programs];

    const animationStyle =
      direction === "left"
        ? { animation: "scroll-left 7s linear infinite" }
        : { animation: "scroll-right 7s linear infinite" };

    return (
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-slate-50 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-slate-50 to-transparent sm:w-16" />

        <div className="flex gap-4 sm:gap-5" style={animationStyle}>
          {duplicated.map((program, index) => (
            <div key={`${program.code}-${direction}-${index}`}>
              {renderCard(program)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
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

        <div className="mt-10 space-y-8">
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

            {renderScrollingRow(undergraduatePrograms, "left")}
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

            {renderScrollingRow(postgraduatePrograms, "right")}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Explore Programs
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default DegreeSection;