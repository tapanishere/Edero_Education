import React from "react";
import {
  HiBriefcase,
  HiCode,
  HiCurrencyDollar,
  HiShieldCheck,
  HiShoppingCart,
  HiChip,
} from "react-icons/hi";

const categories = [
  {
    id: 1,
    title: "Management",
    courses: 45,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    icon: HiBriefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Computer Science",
    courses: 32,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    icon: HiCode,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 3,
    title: "Finance & Accounting",
    courses: 27,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    icon: HiCurrencyDollar,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    title: "Information Technology",
    courses: 19,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    icon: HiShieldCheck,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 5,
    title: "Commerce",
    courses: 16,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    icon: HiShoppingCart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 6,
    title: "Data Science & AI",
    courses: 24,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    icon: HiChip,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="relative overflow-hidden bg-linear-to-b from-slate-50 via-blue-50/40 to-indigo-50/50 py-16 md:py-20 lg:py-24">
      {/* Wavy background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="categories-wave"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 Q20 20 40 40 T80 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-blue-200"
              />
              <path
                d="M0 60 Q20 40 40 60 T80 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-indigo-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#categories-wave)" />
        </svg>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl md:text-[2.5rem] lg:text-5xl">
            Discover Top Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg md:mt-4">
            Explore courses in various fields and elevate your education
          </p>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <article
                key={category.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/50"
              >
                {/* Image + icon wrapper (icon sits outside overflow so it isn't clipped) */}
                <div className="relative">
                  <div className="h-44 overflow-hidden sm:h-48 md:h-52">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Circular icon overlay - positioned to overlap image and text */}
                  <div
                    className={`absolute bottom-0 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 border-white ${category.iconBg} ${category.iconColor} shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-0 flex flex-1 flex-col items-center justify-center px-4 pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
                    {category.title}
                  </h3>
                  {/* <p className="mt-1 text-sm text-slate-500">
                    {category.courses} Courses
                  </p> */}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center md:mt-14">
          {/* <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Categories
            <span aria-hidden="true">→</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Categories;
