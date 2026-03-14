import React from 'react';
import { HiStar } from 'react-icons/hi2';

const expertsData = [
  {
    id: 1,
    name: 'Anushree dey',
    role: 'Senior Mentor',
    experience: '4 years experience',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Suman Sharma',
    role: 'Senior Mentor',
    experience: '4 years experience',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Ravinder Kumar',
    role: 'Career Expert',
    experience: '6 years experience',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Dhruv Pahwa',
    role: 'Education Expert',
    experience: '5 years experience',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
];

const handleApplyNow = () => {
    const mail = "ederoeducation@gmail.com";
    const subject = encodeURIComponent("Counseling Request");
    const body = encodeURIComponent("Hi Team Edero,\n\nI would like to request a counseling session with you. Please let me know the available slots and the best time for me to schedule the session.,\n\n Number:");

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`,
      "_blank"
    );
};

// Duplicate for seamless infinite scroll (right to left)
const expertsLoop = [...expertsData, ...expertsData];

const Guidance = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-800 py-14 sm:py-16 lg:py-20">


      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Right Guidance{' '}
            <span className="text-red-500">From Experts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Since 2018, Edero Education&apos;s team of 200+ experts has been dedicated to guiding you toward a successful career.
          </p>
        </div>

        {/* Continuous scroll right to left */}
        <div className="mt-10 overflow-hidden">
          <div className="flex w-max animate-scroll-r2l gap-4 sm:gap-5 lg:gap-6">
            {expertsLoop.map((expert, index) => (
              <article
                key={`${expert.id}-${index}`}
                className="flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:w-[320px] lg:w-[280px]"
              >
                {/* Top: content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {expert.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    {expert.role}
                  </p>
                  <p className="mt-2 text-base font-bold text-slate-900">
                    {expert.experience}
                  </p>
                  <a
                    onClick={handleApplyNow}
                    className="my-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                  >
                    Get Counseling
                  </a>
                </div>

                {/* Bottom: rating + avatar */}
                <div className="relative flex items-end justify-between bg-slate-100 px-5 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5">
                    <HiStar className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-semibold text-white">
                      {expert.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-5 sm:right-6">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md sm:h-20 sm:w-20"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
