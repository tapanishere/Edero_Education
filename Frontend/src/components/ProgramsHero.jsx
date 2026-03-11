import React from 'react'
import { Link } from 'react-router-dom'
const ProgramsHero = () => {
  return (
    <section className="w-full md:h-[calc(100vh-150px)] flex justify-center  bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto  flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        {/* Left content */}
        <div className="max-w-2xl text-center ">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 sm:text-sm">
            Online Degree Programs
          </p>
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-tight lg:text-[2.6rem]">
            Explore Our Industry-Ready{' '}
            <span className="block text-amber-400">
              Online Degree Programs
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Earn prestigious UGC-approved undergraduate and postgraduate degrees from{' '}
            <span className="font-semibold text-amber-300 underline underline-offset-4">
              NAAC A-rated, NIRF-ranked
            </span>{' '}
            universities, all from the comfort of your home.
          </p>

          <div className=" mt-8 ">
            <Link to='/contact'>
            
            <button className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-500/30 transition hover:bg-amber-300 hover:shadow-lg">
            Talk to Advisor 
            </button>
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ProgramsHero

