import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Edero Education offer?",
    answer:
      "Edero Education helps learners discover and enroll in NAAC-approved online degree programs, providing guidance on university selection, admission support, and program comparison.",
  },
  {
    question: "How can I contact Edero Education for more information?",
    answer:
      "You can reach our counselling team via phone, email, or WhatsApp. Share your background and goals, and our experts will suggest the best-fit online programs for you.",
  },
  {
    question: "Where do the alumni of Edero Education partner universities work?",
    answer:
      "Our learners and alumni work across leading companies in IT, consulting, BFSI, and fast-growing startups. Many also pursue higher studies and global opportunities.",
  },
  {
    question: "What is the process for applying to an online university through Edero Education?",
    answer:
      "Share your details with our counsellor, shortlist suitable universities, upload your documents, and complete the application. We support you at every step until your admission is confirmed.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-500 sm:text-xs">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-500 sm:text-sm md:text-base">
            Find quick answers about our services, admission support, and how
            Edero Education helps you choose the right online program.
          </p>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="rounded-2xl  border border-slate-200 bg-white/90 shadow-sm transition hover:border-violet-200 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="flex-1 text-sm font-semibold text-slate-900 sm:text-base">
                    {item.question}
                  </span>

                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-violet-600 transition-transform ${
                      isOpen
                        ? "border-violet-300 bg-violet-50 rotate-45"
                        : "border-violet-200 bg-violet-50"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-lg leading-none">+</span>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    className="px-4 pb-4 pt-0 text-sm text-slate-600 sm:px-6 sm:pb-5"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

