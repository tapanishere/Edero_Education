import React, { useEffect, useRef, useState } from "react";

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
  {
    value: "100%",
    label: "online Learning Rate",
  },
  {
    value: "99%",
    label: "Job Placement Rate",
  }
];

const AnimatedStatValue = ({ value, index, active }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) {
      setDisplay("0");
      return;
    }

    const match = value.match(/^([\d,]+)/);
    const numericTarget = match
      ? parseInt(match[1].replace(/,/g, ""), 10)
      : NaN;
    const suffix = value.replace(/^[\d,]+/, "");

    if (!numericTarget || Number.isNaN(numericTarget)) {
      setDisplay(value);
      return;
    }

    const duration = 1000;
    const startDelay = index * 120;
    let startTime;
    let frameId;

    const step = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < startDelay) {
        frameId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min((elapsed - startDelay) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericTarget * eased);

      setDisplay(`${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, index, active]);

  return <>{display}</>;
};

const Statistics = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [inView]);

  return (
    <>
      <style>
        {`
          @keyframes statFadeUp {
            0% {
              opacity: 0;
              transform: translateY(14px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 text-center sm:mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300/80 sm:text-xs">
              Impact in Numbers
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
              Trusted by learners and universities worldwide
            </h3>
          </div>

          <div className="text-slate-50">
            <div className="grid gap-3 sm:grid-cols-5 md:gap-4">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className="group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/5 bg-gradient-to-b from-white/10 via-white/5 to-white/5 px-4 py-4 text-center shadow-[0_18px_45px_rgba(15,23,42,0.65)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-300/70 hover:bg-gradient-to-b hover:from-amber-400/15 hover:via-amber-300/10 hover:to-amber-200/5 sm:px-5 sm:py-5"
                  style={
                    inView
                      ? {
                          animation: "statFadeUp 0.8s ease-out forwards",
                          animationDelay: `${index * 0.2 + 0.15}s`,
                          opacity: 0,
                        }
                      : {
                          opacity: 0,
                        }
                  }
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-80">
                    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.55),transparent_55%)]" />
                  </div>

                  <p className="relative text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                    <AnimatedStatValue value={item.value} index={index} active={inView} />
                  </p>
                  <p className="relative text-[10px] font-medium uppercase tracking-[0.18em] text-amber-300/80 sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;

