import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

const DEFAULT_LEADERS = [
  {
    name: "Varun Patel",
    role: "Founder & CGD",
    quote:
      "At Edero, we are committed to providing focused and quality job-oriented programs and real-brothers to many aspirants.",
  },
  {
    name: "Neha Sharma",
    role: "Head of Operations",
    quote:
      "Our goal is to create an engaging and supportive learning environment, where our students on the path to success.",
  },
];

const LeadersWord = ({
  heroImageSrc = DEFAULT_HERO_IMAGE,
  leaders = DEFAULT_LEADERS,
}) => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-16">
        {/* Left: CTA hero */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-sm ring-1 ring-slate-200">
          <img
            src={heroImageSrc}
            alt="Learners collaborating"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
          <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6 sm:min-h-[320px] sm:p-8 lg:min-h-[420px]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Start your educational journey
            </p>
            <h2 className="mt-2 text-balance text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              Start Your Educational Journey{" "}
              <span className="text-amber-300">with Us!</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-200 sm:text-base">
              Join{" "}
              <span className="font-bold text-amber-300">75,000+</span> learners
              at Edero Education for a brighter future.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/30 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Right: leaders quotes */}
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Words from Our{" "}
            <span className="bg-linear-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Leaders
            </span>
          </h3>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            {leaders.map((leader) => (
              <LeaderCard key={`${leader.name}-${leader.role}`} leader={leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function LeaderCard({ leader }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="absolute inset-0 bg-linear-to-br from-amber-50/70 via-transparent to-slate-50 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <Avatar name={leader.name} src={leader.avatarSrc} />
        <div className="min-w-0">
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            <span className="font-semibold text-amber-600">“</span>
            {leader.quote}
            <span className="font-semibold text-amber-600">”</span>
          </p>
          <div className="mt-3">
            <p className="text-sm font-bold text-slate-900 sm:text-base">
              {leader.name}
            </p>
            <p className="text-xs font-semibold text-amber-700 sm:text-sm">
              {leader.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ name, src }) {
  const initials = (name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .filter(Boolean)
    .join("");

  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-200 sm:h-16 sm:w-16">
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 text-sm font-extrabold text-amber-300 sm:text-base">
          {initials || "ED"}
        </div>
      )}
    </div>
  );
}

export default LeadersWord;
