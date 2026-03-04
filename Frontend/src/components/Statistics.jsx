import React from "react";

const stats = [
  {
    value: "75,000+",
    label: "Learners",
  },
  {
    value: "20+",
    label: "Partner Universities",
  },
  {
    value: "90%",
    label: "Career Growth Rate",
  }, 
];

const Statistics = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex  text-center text-slate-800 max-w-1024">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex w-1/3 flex-col items-center gap-1  bg-white/80 px-4 py-4 shadow-sm  ring-1 ring-slate-200/70 backdrop-blur-sm"
            >
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {item.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-[13px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

