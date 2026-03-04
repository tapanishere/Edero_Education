import React from "react";
import jain from '../assets/logos/jain.png'
import Chandigarh_University from '../assets/logos/chandigarh-University.png'
import DYPatil from '../assets/logos/D.Y.Patil.webp'
import Andhra_University from '../assets/logos/Andhra_University_logo.png'
import Kurukshetra_Universiy from '../assets/logos/Kurukshetra_Universiy.png'
import O_P_Jindal_Global_University from '../assets/logos/O._P._Jindal_Global_University.png'
import Vivekananda from '../assets/logos/Vivekananda.png'
import Bharathidasan from '../assets/logos/Bharathidasan.png'
import Vignan from '../assets/logos/Vignan.png'
import VISTAS from '../assets/logos/VISTAS.jpg'
import Alliance from '../assets/logos/Alliance.svg'
import { IoSettings } from "react-icons/io5";
const universities = [
  {
    logo:jain,
    name: "Jain University",
    meta: [
      { label: "NAAC", value: "A++", highlight: true },
      { label: "NIRF", value: "62" },
    ],
  },
  {
    logo:Chandigarh_University,
    name: "Chandigarh University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "NIRF", value: "19" },
    ],
  },
  {
    logo:DYPatil,
    name: "D.Y. Patil University",
    meta: [
      { label: "NAAC", value: "A++", highlight: true },
      { label: "NIRF", value: "91" },
    ],
  },
  {
    logo:Andhra_University,
    name: "Andhra University",
    meta: [
      { label: "NAAC", value: "A++", highlight: true },
      { label: "NIRF", value: "23" },
    ],
  },
  {
    logo:Kurukshetra_Universiy,
    name: "Kurukshetra University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "Band", value: "101-150" },
    ],
  },
  {
    logo:O_P_Jindal_Global_University,
    name: "OP Jindal Global University",
    metaText: "Sonipat • Haryana",
  },
  {
    logo:Vivekananda,
    name: "Vivekananda Global University",
    metaText: "NAAC A+ • WES Certified",
  },
  {
    logo:Bharathidasan,
    name: "Bharathidasan University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "NIRF", value: "36" },
    ],
  },
  {
    logo:Vignan,
    name: "Vignan University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "NIRF", value: "70" },
    ],
  },
  {
    logo:VISTAS,
    name: "VISTAS University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "NIRF", value: "101-150" },
    ],
  },
  {
    logo:Alliance,
    name: "Alliance University",
    meta: [
      { label: "NAAC", value: "A+", highlight: true },
      { label: "NIRF", value: "150-200" },
    ],
  },
];

const initialsFromName = (name) => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "U";
  const second = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  return (first + second).toUpperCase();
};

const UniversityCard = ({ item }) => {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200/70 ">
          <img src={item.logo}  />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold uppercase tracking-[0.06em] text-slate-900">
            {item.name}
          </h3>

          {item.metaText ? (
            <p className="mt-2 text-xs text-slate-600">{item.metaText}</p>
          ) : (
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
              {item.meta?.map((m, idx) => (
                <React.Fragment key={`${m.label}-${m.value}-${idx}`}>
                  <span className="inline-flex items-center gap-1">
                    <span
                      className={
                        m.highlight
                          ? "font-semibold text-amber-700"
                          : "font-semibold text-slate-700"
                      }
                    >
                      {m.label}
                    </span>
                    <span className="text-slate-700">{m.value}</span>
                  </span>
                  {idx !== (item.meta?.length ?? 0) - 1 ? (
                    <span className="text-slate-300">•</span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-slate-200/80 to-transparent opacity-0 transition group-hover:opacity-100" />
    </div>
  );
};

const UniversitisList = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.35]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-400/80 sm:w-16" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700 sm:text-xs">
              Our Partner Universities
            </p>
            <span className="h-px w-10 bg-amber-400/80 sm:w-16" />
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Recognized &amp; Partnered Universities
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-xs text-slate-600 sm:text-sm md:text-base">
            We collaborate with{" "}
            <span className="font-semibold text-amber-700">NAAC A+</span>{" "}
            &amp;{" "}
            <span className="font-semibold text-amber-700">NIRF-ranked</span>{" "}
            institutions across India to deliver quality online education.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5  lg:grid-cols-3 2xl:grid-cols-3">
          {universities.map((u) => (
            <UniversityCard key={u.name} item={u} />
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center">
        <span className="h-px w-10 bg-amber-400/80 sm:w-16 mr-5" />
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-slate-900/15 sm:px-6 sm:text-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ">
              
                <IoSettings size={25} color=" oklch(76.9% 0.188 70.08)" />
            </span>
            
            <span>And Many More Trusted Institutions...</span>
          </div>
          <span className="h-px w-10 bg-amber-400/80 sm:w-16 ml-5" />
        </div>
      </div>
    </section>
  );
};

export default UniversitisList;
