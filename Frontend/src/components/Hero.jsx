import React from "react";
import image from '../assets/images/Edero.png'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background gradient overlay on the left */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-900/30 lg:w-2/3"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
        {/* Left: Text content */}
        <div className="relative z-10 max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Online &amp; Hybrid Degrees
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Your Future with{" "}
            <span className="text-sky-300">Industry-Ready Online Degrees</span>
          </h1>

          <p className="max-w-lg text-sm text-slate-200 sm:text-base">
            Empowering 75,000+ learners with UGC-approved, AI-driven
            undergraduate and postgraduate programs designed for ambitious
            students and working professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to='/programs'>
            <button className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore Programs
            </button>
            </Link>

          </div>

          {/* Stats / Accreditation row */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-xs text-slate-300 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-[10px] font-semibold">
                UGC
              </span>
              <span>UGC-DEB Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-[10px] font-semibold">
                A+
              </span>
              <span>NAAC A+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-[10px] font-semibold">
                AICTE
              </span>
              <span>AICTE Recognized</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-[10px] font-semibold">
                NIRF
              </span>
              <span>NIRF Ranked</span>
            </div>
          </div>
        </div>


        {/* Right: Image */}
        <div className="relative flex-1">
          <div className="mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/40 shadow-2xl shadow-black/40">
              {/* Replace the div below with an <img> tag when your asset is ready */}
              <div className="aspect-4/3 w-full bg-cover bg-center sm:aspect-video">
                <img src={image} alt="" className=" h-full w-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

