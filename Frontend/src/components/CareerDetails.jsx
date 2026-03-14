import React from "react";
import groth from '../assets/images/groth.png'
import flexible from '../assets/images/Flexible.jpg'
import Benifits from '../assets/images/Benifits.svg'
import team from '../assets/images/team.png'
const lifeHighlights = [
  {
    Image:team,
    title: "Collaborative Team",
    desc: "Work with passionate, supportive colleagues who help you grow.",
  },
  {
    Image:groth,
    title: "Growth Opportunities",
    desc: "Clear paths for learning, ownership and career advancement.",
  },
  {
    Image:flexible,
    title: "Work-Life Balance",
    desc: "Flexible, people-first culture that respects your time.",
  },
  {
    Image:Benifits,
    title: "Fun & Events",
    desc: "Engaging activities, celebrations and team-building moments.",
  },
];

const CareerDetails = () => {
  

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
    <section className="w-full bg-linear-to-b from-slate-50 via-white to-slate-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Top content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text block */}
          <div className="max-w-xl space-y-3 md:space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
              Life at Edero
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
              Work culture that{" "}
              <span className="text-amber-600">inspires, supports</span> &amp;{" "}
              <span className="text-amber-600">celebrates you</span>
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Join a mission-driven team that is transforming online education
              in India. Grow your skills, make a real impact and enjoy a
              balanced, people-first workplace.
            </p>
          </div>

          {/* Highlighted visual / copy block */}
          <div className="w-full lg:w-auto">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-tr from-amber-500 via-orange-400 to-amber-300 px-6 py-6 shadow-lg sm:px-8 sm:py-8">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                  Work Culture at a Glance
                </p>
                <p className="text-sm text-amber-50 sm:text-base">
                  Inspiring workspaces, collaborative teams and a supportive
                  environment that helps you bring your best self to work every
                  day.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-amber-100/40 bg-white/10 px-3 py-1 text-[11px] font-medium text-amber-50 backdrop-blur">
                    Collaborative team
                  </span>
                  <span className="rounded-full border border-amber-100/40 bg-white/10 px-3 py-1 text-[11px] font-medium text-amber-50 backdrop-blur">
                    Growth mindset
                  </span>
                  <span className="rounded-full border border-amber-100/40 bg-white/10 px-3 py-1 text-[11px] font-medium text-amber-50 backdrop-blur">
                    Flexible &amp; inclusive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: feature cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 md:gap-6">
          {lifeHighlights.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-2 rounded-2xl bg-white/90 px-4 py-5 text-center shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-amber-200 sm:px-5 sm:py-6"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center ">
                <img src={item.Image} alt="" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.title}
              </h3>
              <span className="mx-auto h-px w-10 bg-amber-400" />
              <p className="text-xs text-slate-500 sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom: CTA banner */}
        <div className="flex flex-col gap-6 rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-8 text-white sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
              Ready to grow your career with us?
            </h3>
            <p className="text-xs text-slate-200 sm:text-sm md:max-w-xl">
              Join a team that&apos;s transforming online education in India.
              Bring your skills, curiosity and passion for impact—we&apos;ll
              help you do the best work of your career.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button 
              onClick={handleApplyNow}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-md shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-sm"
            >
              Send Your Resume
            </button>
            <button
            onClick={handleApplyNow}
              className="inline-flex items-center gap-2 rounded-full border border-slate-500/60 bg-slate-900/40 px-4 py-2 text-[11px] font-medium text-slate-100 backdrop-blur-sm sm:text-xs"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[11px] font-bold text-slate-900">
                @
              </span>
              <span>ederoeducation@gmail.com</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetails;

