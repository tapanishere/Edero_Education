import React from "react";
import image from '../assets/images/careers.webp'
const CareerHero = () => {

  const handleApplyNow =  () => {
    const mail = "ederoeducation@gmail.com"
    const subject = encodeURIComponent("Resume for Job Opportunity");
    const body = encodeURIComponent("Hi Team Edero,\n\n");
  
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`,
      "_blank"
    );
  };


  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 ring-1 ring-amber-500/40">
            Join our growing team
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Build Your Career with{" "}
            <span className="bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Edero Education
            </span>
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Empowering{" "}
            <span className="font-semibold text-amber-300">75,000+ learners</span>{" "}
            nationwide through high-quality online education. Help us shape the
            future of learning with a mission-driven, collaborative team.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
            onClick={handleApplyNow}
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Join Our Team
            </button>
            
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-300 sm:text-sm">
            <div>
              <p className="text-base font-semibold text-amber-300 sm:text-lg">
                75,000+
              </p>
              <p className="text-slate-400">Learners empowered</p>
            </div>
            <div>
              <p className="text-base font-semibold text-amber-300 sm:text-lg">
                Nationwide
              </p>
              <p className="text-slate-400">Presence across India</p>
            </div>
            <div>
              <p className="text-base font-semibold text-amber-300 sm:text-lg">
                Remote-first
              </p>
              <p className="text-slate-400">Flexible & inclusive culture</p>
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-amber-500/40 via-indigo-500/20 to-sky-500/40 blur-3xl" />
            <div className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-amber-500/30">
              <img
                src={image}
                alt="Team collaborating at Edero Education"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;

