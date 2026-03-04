import React from "react";

import DEFAULT_IMAGE from '../assets/images/mission.avif'

const AboutMission = ({ imageSrc = DEFAULT_IMAGE }) => {
  const features = [
    {
      title: "Top Ranked Universities",
      description:
        "Bring leading NAAC A+ rated, NIRF-ranked degrees to learners across India.",
      Icon: MedalIcon,
    },
    {
      title: "UGC-Approved Programs",
      description:
        "Advance your career with recognized online degrees designed for real outcomes.",
      Icon: SealIcon,
    },
    {
      title: "Career-Focused Learning",
      description:
        "Learn with industry-aligned curriculum, projects, and dedicated career support.",
      Icon: GrowthIcon,
    },
    {
      title: "Affordable & Flexible",
      description:
        "Study anytime, anywhere with accessible fees, EMI options, and blended support.",
      Icon: CoinsIcon,
    },
  ];

  const stats = [
    { value: "75,000+", label: "Happy Learners", Icon: UsersIcon },
    { value: "90%", label: "Success Rate", Icon: TrophyIcon },
    { value: "150+", label: "Job-Oriented Programs", Icon: CapIcon },
    { value: "850+", label: "Hiring Partners", Icon: HandshakeIcon },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-slate-200/55 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Mission */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionKicker title="Our Mission" />
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              At Edero Education, our mission is to{" "}
              <span className="font-semibold text-amber-600">
                make quality education accessible to all
              </span>{" "}
              by providing industry-ready online degree programs in collaboration
              with NAAC A+ &amp; NIRF-ranked institutions. We’re dedicated to
              transforming careers through affordable, flexible, and recognized
              online education.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
              <img
                src={imageSrc}
                alt="Professionals collaborating in an office"
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-slate-900/15 via-transparent to-amber-300/15" />
            </div>
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-14 sm:mt-16">
          <div className="text-center">
            <h2 className="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
              Why Choose{" "}
              <span className="bg-linear-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Edero?
              </span>
            </h2>
            <p className="mt-2 text-sm font-semibold tracking-wide text-slate-600 sm:text-base">
              Paving the Way for{" "}
              <span className="text-amber-600">Online Educational</span>{" "}
              Excellence
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
              />
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="mt-14 sm:mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Journey
            </h3>
            <p className="mt-2 text-sm font-semibold tracking-wide text-slate-600 sm:text-base">
              Paving the Way for{" "}
              <span className="text-amber-600">Online Educational</span>{" "}
              Excellence
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <StatPill
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  Icon={s.Icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function SectionKicker({ title }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-10 rounded-full bg-amber-500" />
        <span className="h-2 w-2 rounded-full bg-amber-500" />
        <span className="h-[2px] w-16 rounded-full bg-amber-300" />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, Icon }) {
  return (
    <div className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-50/70 via-transparent to-slate-50 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 ring-1 ring-amber-100">
          <Icon className="h-6 w-6 text-amber-600" />
        </div>
        <h4 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function StatPill({ value, label, Icon }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 sm:px-5">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 ring-1 ring-amber-100">
        <Icon className="h-6 w-6 text-amber-600" />
      </div>
      <div>
        <div className="text-xl font-extrabold text-slate-900 sm:text-2xl">
          {value}
        </div>
        <div className="text-xs font-semibold tracking-wide text-slate-600 sm:text-sm">
          {label}
        </div>
      </div>
    </div>
  );
}

function MedalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h4l1 5-3 2-2-2-2 2-3-2 1-5h4Zm10 0h4l1 5-3 2-2-2-2 2-3-2 1-5h4ZM12 11a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function SealIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 14.7 4.2l3.4-.1 1.2 3.2 2.8 2-1.4 3.1 1.4 3.1-2.8 2-1.2 3.2-3.4-.1L12 22l-2.7-2.2-3.4.1-1.2-3.2-2.8-2L3.3 12 1.9 8.9l2.8-2 1.2-3.2 3.4.1L12 2Zm-1 6v7l6-3.5L11 8Z" />
    </svg>
  );
}

function GrowthIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 19h16v2H2V3h2v16Zm5-2H7V9h2v8Zm5 0h-2V5h2v12Zm5 0h-2v-6h2v6Z" />
    </svg>
  );
}

function CoinsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4Zm0 10c4.4 0 8-1.8 8-4v4c0 2.2-3.6 4-8 4s-8-1.8-8-4V9c0 2.2 3.6 4 8 4Zm0 6c4.4 0 8-1.8 8-4v4c0 2.2-3.6 4-8 4s-8-1.8-8-4v-4c0 2.2 3.6 4 8 4Z" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 9a8 8 0 0 1 16 0H4Zm13.5-9a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM19 21h3a7 7 0 0 0-5.5-6.8 6 6 0 0 1 2.5 4.8Z" />
    </svg>
  );
}

function TrophyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10v3h3v3a6 6 0 0 1-6 6h-1v3h3v2H8v-2h3v-3h-1A6 6 0 0 1 4 8V5h3V2Zm-1 5H5v1a4 4 0 0 0 4 4h1V7H6Zm13 0h-4v5h1a4 4 0 0 0 4-4V7Z" />
    </svg>
  );
}

function CapIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-6.6 9.4L4 16c2.2 2 5 3 8 3s5.8-1 8-3l-1.4-3.6L12 15l-6.6-2.6Z" />
    </svg>
  );
}

function HandshakeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8.5 12.2 6.3 10l-4 4 3.8 3.8c.6.6 1.6.6 2.2 0l2.2-2.2-2-2-1.1 1.1-1.8-1.8L6.3 12l1.1 1.1 1.1-.9Zm13.2-2.2-4-4-2.2 2.2 1.1 1.1-1.8 1.8-1.1-1.1-2.3 2.3 3.4 3.4c.6.6 1.6.6 2.2 0L21.7 14l-1.8-1.8ZM10.7 8.7 9 10.4l4.6 4.6 1.7-1.7-4.6-4.6Zm1.3-1.3 1.7-1.7c.6-.6 1.6-.6 2.2 0l1.6 1.6-2.2 2.2-1.1-1.1-1.8 1.8 1.1 1.1-1.7 1.7L7.6 8.7 9.2 7c.6-.6 1.6-.6 2.2 0l.6.6Z" />
    </svg>
  );
}

export default AboutMission;

