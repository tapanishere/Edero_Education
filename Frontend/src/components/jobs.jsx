import React from "react";

const jobsData = [
    {
        id: 1,
        jobTitle: "Senior Frontend Developer",
        jobDescription: "We are looking for a passionate Frontend Developer to join our team and help build engaging, accessible learning experiences for students across India. You will work with modern React, collaborate with design and backend teams, and own features from concept to production.",
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
        jobDescription: "Join our product team to shape learning experiences for millions of students. You will own UX research, wireframes, and high-fidelity designs and work closely with engineering to ship impactful features.",
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
        jobDescription: "Help scale our platform and APIs that power learning content and assessments. You will work with Node.js, databases, and cloud services to build reliable, performant backend systems.",
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

const Jobs = () => {
  const handleApplyNow =  (title) => {
    const mail = "punyabrata900@gmail.com"
    const subject = encodeURIComponent("Resume for Job Opportunity"+title);
    const body = encodeURIComponent("Hi Team Edero,\n\n");
  
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section className="w-full  bg-linear-to-b from-slate-50 via-white to-slate-100 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    
        {jobsData==0?<>
        <h1 className=" text-2xl font-bold">No jobs available right now</h1>
        </>:jobsData.map((job) => (
        <article key={job.id} className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/80 mb-8 last:mb-0">
          {/* Header strip */}
          <div className="border-b border-slate-100 bg-linear-to-r from-slate-50 to-white px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
              Open Position
            </p>
            <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
              {job.jobTitle}
            </h1>
            <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 ring-1 ring-amber-200/60">
                {job.experience} experience
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200/60">
                {job.salary}
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/60">
                {job.location}
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/60">
                {job.type}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:gap-8">
              <div className="flex-1">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Experience Required
                </h2>
                <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                  {job.experience}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Relevant experience in similar role or domain.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Salary
                </h2>
                <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                  {job.salary}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  CTC range, negotiable based on experience.
                </p>
              </div>
            </div>

            {/* Job description */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Job Description
              </h2>
              <div className="mt-3 space-y-4 text-slate-600 sm:text-base">
                <p className="leading-relaxed">
                  {job.jobDescription}
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                What you&apos;ll do
              </h2>
              <ul className="mt-3 space-y-2 text-slate-600 sm:text-base">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply CTA */}
            <div className="flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Interested? Send your resume and a short intro to our team.
              </p>
              <button
                type="button"
                onClick={() => handleApplyNow(job.jobTitle)}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-500/30 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </article>
        ))}

        {/* Footer note */}
        
      </div>
    </section>
  );
};

export default Jobs;
