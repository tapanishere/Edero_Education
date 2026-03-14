import React, { useEffect, useRef, useState } from "react";
import student_1 from '../assets/images/student_1.png'
import student_2 from '../assets/images/student_2.jpg'
import student_3 from '../assets/images/student_3.jpg'
const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Online MBA Student",
        title: "Edero Education helped me complete my MBA",
        img: student_2,
    },
    {
        name: "Priya maity",
        role: "BBA Student",
        title: "The admission process was very smooth and I got expert guidance and support throughout my enrollment.",
        img: student_1,
    },
    {
        name: "Amit Verma",
        role: "MCA Student",
        title: "Great experience with Edero Education",
        img: student_3,
    },
];

const SCROLL_SPEED = 30; // pixels per second

const Testimonials = () => {
    const trackRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationFrame;
        let lastTime;

        const step = (time) => {
            if (lastTime != null) {
                const deltaSeconds = (time - lastTime) / 1000;

                setOffset((prev) => {
                    const totalWidth = track.scrollWidth / 2 || 1;
                    let next = prev - SCROLL_SPEED * deltaSeconds;
                    if (Math.abs(next) >= totalWidth) {
                        next += totalWidth;
                    }
                    return next;
                });
            }

            lastTime = time;
            animationFrame = window.requestAnimationFrame(step);
        };

        animationFrame = window.requestAnimationFrame(step);

        return () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, []);

    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full bg-linear-to-b from-[#dfe8ff] via-[#e8f2ff] to-[#d9e9ff] py-16 md:py-24">
            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center text-sky-900 lg:px-0">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                    Student Success Stories
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-sky-900 md:text-3xl lg:text-4xl">
                    What Our Students Say
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-sky-800/80 md:text-base">
                    Thousands of students have upgraded their careers through our online
                    programs. Hear how Edero Education has supported their journeys.
                </p>

                {/* Slider panel */}
                <div className="mt-10 w-full">
                    <div className="relative mx-auto overflow-hidden rounded-3xl bg-white/80 px-4 py-10 shadow-xl backdrop-blur-sm sm:px-6 md:px-10">
                        {/* Quote icon */}
                        <div className="pointer-events-none absolute left-6 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-2xl text-sky-500 shadow-sm sm:flex">
                            <span className="-mt-1">“</span>
                        </div>

                        {/* Continuous carousel track */}
                        <div
                            ref={trackRef}
                            className="flex gap-6 md:gap-8"
                            style={{
                                transform: `translateX(${offset}px)`,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {loopedTestimonials.map((t, index) => (
                                <article
                                    key={`${t.name}-${index}`}
                                    className="relative flex border-3 border-stone-200 min-w-[260px] max-w-xs flex-col rounded-3xl bg-white px-5 pb-6 pt-10 text-left shadow-md sm:min-w-[280px] md:min-w-[320px] md:px-7 md:pb-8"
                                >
                                    {/* Avatar */}
                                    <div className="absolute border-3 border-stone-700 -top-10 left-1/2 h-16 w-16 -translate-x-1/2 overflow-hidden rounded-full  shadow-md">
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>


                                    {/* Main text */}
                                    <h4 className="mb-3 w-full h-25 text-center text-sm font-semibold text-sky-900 md:text-base whitespace-pre-wrap">
                                        <span className="text-orange-600">“</span>
                                        {t.title}
                                        <span className="text-orange-600">”</span>
                                    </h4>

                                    {/* Name & role */}
                                    <div className="mt-5 space-y-1 text-sm">
                                        <p className="font-semibold text-sky-900">{t.name}</p>
                                        <p className="text-xs text-slate-500">{t.role}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

