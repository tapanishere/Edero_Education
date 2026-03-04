import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const degreesData = {
  ug: [
    {
      code: 'BBA',
      title: 'Bachelor of Business Administration',
      desc: 'Hone business, management, and leadership skills with a solid foundation in business principles.',
      duration: '3 Years',
      highlights: ['UGC-DEB', 'NAAC A+'],
    },
    {
      code: 'BCA',
      title: 'Bachelor of Computer Applications',
      desc: 'Develop coding, programming, and IT expertise through a technology-focused curriculum.',
      duration: '3 Years',
      highlights: ['UGC-DEB', 'NAAC A+'],
    },
    {
      code: 'BA',
      title: 'Bachelor of Arts',
      desc: 'Broaden your knowledge and skills with diverse arts and humanities courses.',
      duration: '3 Years',
      highlights: ['UGC-DEB', 'AIIRF 32'],
    },
    {
      code: 'B.Com',
      title: 'Bachelor of Commerce',
      desc: 'Gain comprehensive knowledge in commerce, accounting, and finance.',
      duration: '3 Years',
      highlights: ['UGC-DEB', 'AICTE'],
    },
  ],
  pg: [
    {
      code: 'MCA',
      title: 'Master of Computer Applications',
      desc: 'Thrust software concepts, enhance development skills, and be industry ready.',
      duration: '2 Years',
      highlights: ['UGC-DEB', 'NAAC A+'],
    },
    {
      code: 'MA',
      title: 'Master of Arts',
      desc: 'Enrich deep knowledge in arts and humanities with an industry-relevant curriculum.',
      duration: '2 Years',
      highlights: ['UGC-DEB', 'AIIRF 42'],
    },
    {
      code: 'M.Com',
      title: 'Master of Commerce',
      desc: 'Advanced specializations in commerce, accounting, and finance.',
      duration: '2 Years',
      highlights: ['UGC-DEB', 'AIIRF 32'],
    },
    {
      code: 'M.Sc',
      title: 'Master of Science',
      desc: 'Specialize in fields such as data science, IT, mathematics, and more.',
      duration: '2 Years',
      highlights: ['UGC-DEB', 'NIRF 90'],
    },
  ],
}

const Degrees = () => {
  const [activeTab, setActiveTab] = useState('ug')

  const programs = activeTab === 'ug' ? degreesData.ug : degreesData.pg

  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500 sm:text-sm">
            Discover Your Perfect Online Degree Program
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Discover Your <span className="text-amber-500">Programs</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('ug')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === 'ug'
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Undergraduate Programs
            </button>
            <button
              onClick={() => setActiveTab('pg')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === 'pg'
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Postgraduate Programs
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.code}
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-500">
                  <span className="text-sm">{program.code}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                  {program.title}
                </h3>
                <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                  {program.desc}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 sm:text-sm">
                  <span className="font-medium text-slate-800">
                    Duration: {program.duration}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {program.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.7rem] font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 rounded-2xl bg-slate-900 px-5 py-6 text-center text-white sm:px-8 sm:py-7 lg:flex lg:items-center lg:justify-between lg:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 sm:text-sm">
              Not Sure Which Program is Right for You?
            </p>
            <p className="mt-2 text-sm text-slate-100 sm:text-base">
              Talk to our academic advisors for personalized guidance.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
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

export default Degrees

