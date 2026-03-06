import React from "react";
import {
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineChevronRight,
} from "react-icons/hi";

const jobsData = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    jobDescription:
      "We are looking for a passionate Frontend Developer to join our team and help build engaging, accessible learning experiences for students across India. You will work with modern React, collaborate with design and backend teams, and own features from concept to production.",
    experience: "3-5 years",
    location: "Remote / Bangalore",
    type: "Full-time",
    salary: "₹12-18 LPA",
    responsibilities: [
      "Build responsive, accessible UI with React and Tailwind CSS",
      "Own features from design to deployment",
      "Write clean, maintainable code and tests",
      "Collaborate in an agile, remote-friendly team",
    ],
  },
  {
    id: 2,
    jobTitle: "Product Designer",
    jobDescription:
      "Join our product team to shape learning experiences for millions of students. You will own UX research, wireframes, and high-fidelity designs and work closely with engineering to ship impactful features.",
    experience: "2-4 years",
    location: "Hybrid / Mumbai",
    type: "Full-time",
    salary: "₹8-14 LPA",
    responsibilities: [
      "Lead UX research and design for web and mobile",
      "Create wireframes, prototypes and design systems",
      "Collaborate with product and engineering",
      "Advocate for accessibility and usability",
    ],
  },
  {
    id: 3,
    jobTitle: "Backend Engineer",
    jobDescription:
      "Help scale our platform and APIs that power learning content and assessments. You will work with Node.js, databases, and cloud services to build reliable, performant backend systems.",
    experience: "3-5 years",
    location: "Remote",
    type: "Full-time",
    salary: "₹12-18 LPA",
    responsibilities: [
      "Design and implement APIs and services",
      "Optimize database queries and caching",
      "Ensure security, monitoring and reliability",
      "Work in an agile, cross-functional team",
    ],
  },
];

const MetaItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 text-slate-600">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
      <Icon className="h-4 w-4" aria-hidden />
    </span>
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="text-sm font-medium text-slate-800">{value}</p>
    </div>
  </div>
);

const Jobs = () => {
  const handleApplyNow = (title) => {
    const mail = "punyabrata900@gmail.com";
    const subject = encodeURIComponent("Resume for Job Opportunity " + title);
    const body = encodeURIComponent("Hi Team Edero,\n\n");

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section className="w-full bg-slate-50/80 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Open positions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            Join us in building the future of education. We’re looking for
            talented people who care about impact.
          </p>
        </header>

        {jobsData.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm">
            <p className="text-lg font-medium text-slate-700">
              No open positions right now
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Check back later or follow us for updates.
            </p>
          </div>
        ) : (
          <ul className="space-y-6">
            {jobsData.map((job) => (
              <li key={job.id}>
                <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
                  {/* Card header */}
                  <div className="border-b border-slate-100 px-6 py-5 sm:px-8 sm:py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                          {job.jobTitle}
                        </h3>
                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                          <MetaItem
                            icon={HiOutlineBriefcase}
                            label="Experience"
                            value={job.experience}
                          />
                          <MetaItem
                            icon={HiOutlineCurrencyRupee}
                            label="Salary"
                            value={job.salary}
                          />
                          <MetaItem
                            icon={HiOutlineLocationMarker}
                            label="Location"
                            value={job.location}
                          />
                          <MetaItem
                            icon={HiOutlineClock}
                            label="Type"
                            value={job.type}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5 sm:px-8 sm:py-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          About the role
                        </h4>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          {job.jobDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm text-slate-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-slate-500">
                        Send your resume and a short intro to our team.
                      </p>
                      <button
                        type="button"
                        onClick={() => handleApplyNow(job.jobTitle)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:w-auto"
                      >
                        Apply for this role
                        <HiOutlineChevronRight className="h-4 w-4" aria-hidden />
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Jobs;
