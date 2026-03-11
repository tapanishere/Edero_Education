import React from 'react';

const courseCategories = [
  'Human Resource Management',
  'IT & Finance',
  'Brand, Sales, & Marketing',
  'Strategy & Leadership',
  'General Management',
  'Project/Product Management',
  'Business Management',
  'Healthcare',
];

const ExecutiveCourses = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Specialised Courses for{' '}
            <span className="text-red-600">Busy Professionals</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Discover Top Executive Courses that Fit Your Schedules
          </p>
        </div>

        {/* Course categories grid - responsive: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {courseCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="group relative flex min-h-[72px] items-center justify-center rounded-xl border border-slate-300 bg-linear-to-b from-white to-slate-50/80 px-4 py-4 text-center text-sm font-medium text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-md hover:from-slate-50 hover:to-slate-100/80 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:ring-offset-2 sm:min-h-[80px] sm:text-base"
              style={{
                borderBottomStyle: 'dotted',
                borderBottomWidth: '2px',
              }}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCourses;
