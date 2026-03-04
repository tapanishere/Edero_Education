import React from "react";
import aboutImage from '../assets/images/About.jpg'


const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-stretch lg:gap-0 lg:px-8 lg:py-20">
        {/* Left content */}
        <div className="flex flex-1 flex-col justify-center lg:max-w-[55%] lg:pr-4 xl:pr-8">
          <div className="space-y-4 sm:space-y-5">
            {/* Main heading with golden dot */}
            <div className="flex items-start gap-3">
              <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                About{" "}
                <span className="bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Edero Education
                </span>
              </h1>
            </div>

            <p className="text-lg font-medium text-slate-100 sm:text-xl md:text-2xl lg:text-3xl">
              Your Trusted Partner in Quality Online Education
            </p>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Empowering{" "}
              <span className="font-bold text-amber-400">75,000+</span> learners
              nationwide, Edero Education offers flexible, affordable and
              career-focused online degree programs in collaboration with
              top-ranked Indian universities.
            </p>
          </div>

          {/* Statistics */}
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <StatCard
              icon={
                <PeopleIcon className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
              }
              value="75,000+"
              label="Learners"
            />
            <StatCard
              icon={
                <BuildingIcon className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
              }
              value="20+"
              label="Universities"
            />
            <StatCard
              icon={
                <HandshakeIcon className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
              }
              value="850+"
              label="Hiring Partners"
            />
          </div>
        </div>

        {/* Golden curved separator - visible on larger screens */}


        {/* Right - Image */}
        <div className="relative flex-1 lg:max-w-[45%]">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl lg:aspect-auto lg:h-full lg:min-h-[420px] lg:rounded-l-2xl xl:min-h-[480px]">
            <img
              src={aboutImage}
              alt="Edero Education team - professionals in a modern office"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/20 to-transparent lg:from-slate-950/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

function StatCard({ icon, value, label }) {
  return (
    <div className="rounded-xl bg-slate-900/60 px-4 py-3 ring-1 ring-slate-700/50 backdrop-blur-sm sm:px-5 sm:py-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-xl font-bold text-amber-400 sm:text-2xl">{value}</p>
          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function PeopleIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-6 6.5c-2.5 0-4.5 1.5-5.5 3.5H2a6 6 0 0 1 12 0h-2.5c-1-2-3-3.5-5.5-3.5Zm9 0c-1.5 0-2.75.75-3.5 2h4.5a6 6 0 0 0-12 0h4.5c.75-1.25 2-2 3.5-2Z" />
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M3 3h8v4h2V3h8v18H3V3Zm2 2v4h4V5H5Zm6 0v4h4V5h-4ZM5 11v6h4v-6H5Zm6 0v6h4v-6h-4Z" />
    </svg>
  );
}

function HandshakeIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M11.5 5.5a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v2h-2v1h2v2h-2v1h-1v-1h-2v1h-2v-1H7v1H5v-2h2v-1H5v-2h2v-1H4v-2a1 1 0 0 1 1-1h1V6.5a1 1 0 0 1 1-1h1V4a1 1 0 0 1 2 0v1.5h1a1 1 0 0 1 1 1Zm-5 5v1h2v-1h-2Zm6 0v1h2v-1h-2Z" />
    </svg>
  );
}

export default AboutHero;
