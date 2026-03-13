import React, { useState } from "react";
import { HiAcademicCap, HiClock, HiCheckBadge } from 'react-icons/hi2';
const coursesData = [
    // ================= UNDERGRADUATE =================
    {
      id: 1,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "General",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Foundation in business management, leadership and entrepreneurship.",
      tags: ["UGC-DEB"]
    },
    {
      id: 2,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "Finance",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Business administration with specialization in finance.",
      tags: ["UGC-DEB"]
    },
    {
      id: 3,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "Marketing",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Focus on branding, marketing strategies and consumer behavior.",
      tags: ["UGC-DEB"]
    },
    {
      id: 4,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "Human Resource Management",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Learn HR planning, recruitment and organizational behavior.",
      tags: ["UGC-DEB"]
    },
    {
      id: 5,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "Digital Marketing",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Modern marketing including SEO, social media and analytics.",
      tags: ["UGC-DEB"]
    },
    {
      id: 6,
      code: "BBA",
      title: "Bachelor of Business Administration",
      specialization: "Business Analytics",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Data-driven business decision making and analytics.",
      tags: ["UGC-DEB"]
    },
  
    {
      id: 7,
      code: "BCA",
      title: "Bachelor of Computer Applications",
      specialization: "Computer Science & IT",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Core programming, databases and software development.",
      tags: ["UGC-DEB"]
    },
    {
      id: 8,
      code: "BCA",
      title: "Bachelor of Computer Applications",
      specialization: "Data Science",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Data science, machine learning and analytics.",
      tags: ["UGC-DEB"]
    },
    {
      id: 9,
      code: "BCA",
      title: "Bachelor of Computer Applications",
      specialization: "Cloud Computing",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Cloud architecture, DevOps and distributed systems.",
      tags: ["UGC-DEB"]
    },
    {
      id: 10,
      code: "BCA",
      title: "Bachelor of Computer Applications",
      specialization: "Cyber Security",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Security systems, ethical hacking and cyber defense.",
      tags: ["UGC-DEB"]
    },
    {
      id: 11,
      code: "BCA",
      title: "Bachelor of Computer Applications",
      specialization: "Artificial Intelligence",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "AI systems, machine learning and automation.",
      tags: ["UGC-DEB"]
    },
  
    {
      id: 12,
      code: "BCom",
      title: "Bachelor of Commerce",
      specialization: "Accounting & Finance",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Accounting, taxation and financial management.",
      tags: ["UGC-DEB"]
    },
    {
      id: 13,
      code: "BCom",
      title: "Bachelor of Commerce",
      specialization: "International Finance & Accounting",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "ACCA accredited international finance program.",
      tags: ["UGC-DEB", "ACCA"]
    },
  
    {
      id: 14,
      code: "BA",
      title: "Bachelor of Arts",
      specialization: "Journalism & Mass Communication",
      type: "Undergraduate",
      duration: "3 Years",
      desc: "Media studies, journalism and communication.",
      tags: ["UGC-DEB"]
    },
  
    // ================= POSTGRADUATE =================
  
    {
      id: 20,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Finance",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced corporate finance and investment strategies.",
      tags: ["UGC-DEB"]
    },
    {
      id: 21,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Marketing",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Strategic marketing, brand management and analytics.",
      tags: ["UGC-DEB"]
    },
    {
      id: 22,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Human Resource Management",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "HR strategy, talent acquisition and workforce management.",
      tags: ["UGC-DEB"]
    },
    {
      id: 23,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Business Analytics",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Big data analytics for business decisions.",
      tags: ["UGC-DEB"]
    },
    {
      id: 24,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Information Technology",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Management of IT systems and digital transformation.",
      tags: ["UGC-DEB"]
    },
    {
      id: 25,
      code: "MBA",
      title: "Master of Business Administration",
      specialization: "Supply Chain Management",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Operations, logistics and supply chain optimization.",
      tags: ["UGC-DEB"]
    },
  
    {
      id: 30,
      code: "MCA",
      title: "Master of Computer Applications",
      specialization: "Computer Science & IT",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced software engineering and system architecture.",
      tags: ["UGC-DEB"]
    },
    {
      id: 31,
      code: "MCA",
      title: "Master of Computer Applications",
      specialization: "Data Analytics",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced data analysis and machine learning.",
      tags: ["UGC-DEB"]
    },
    {
      id: 32,
      code: "MCA",
      title: "Master of Computer Applications",
      specialization: "Cyber Security",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced cyber defense and security systems.",
      tags: ["UGC-DEB"]
    },
  
    {
      id: 40,
      code: "MCom",
      title: "Master of Commerce",
      specialization: "Accounting & Finance",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced studies in commerce, taxation and finance.",
      tags: ["UGC-DEB"]
    },
    {
      id: 41,
      code: "MCom",
      title: "Master of Commerce",
      specialization: "International Finance",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "International financial systems and accounting.",
      tags: ["UGC-DEB", "ACCA"]
    },
  
    {
      id: 50,
      code: "MA",
      title: "Master of Arts",
      specialization: "English",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced English literature and language studies.",
      tags: ["UGC-DEB"]
    },
    {
      id: 51,
      code: "MA",
      title: "Master of Arts",
      specialization: "Economics",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Advanced economic theories and policies.",
      tags: ["UGC-DEB"]
    },
    {
      id: 52,
      code: "MA",
      title: "Master of Arts",
      specialization: "Public Policy",
      type: "Postgraduate",
      duration: "2 Years",
      desc: "Policy analysis, governance and public administration.",
      tags: ["UGC-DEB"]
    },
  
  ];

const ProgramsSection = () => {

  const [tab, setTab] = useState("Undergraduate");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = coursesData.filter(c => c.type === tab);

  const grouped = filtered.reduce((acc, course) => {
    if (!acc[course.code]) acc[course.code] = [];
    acc[course.code].push(course);
    return acc;
  }, {});

  return (
    <section className="bg-gray-50 py-20 px-6">


      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading with icon highlight */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm">
            <HiAcademicCap className="h-4 w-4 text-amber-500" />
            Programs & Degrees
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Explore Our Programs
        </h2>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Choose From{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Postgraduate &amp; Undergraduate
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-amber-200/50 z-0" />
            </span>{' '}
            Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Industry relevant undergraduate and postgraduate programs.
          </p>
        </div>
      </div>
        
      {/* Tabs */}
      <div className="flex justify-center my-10 gap-4">

        <button
          onClick={() => setTab("Undergraduate")}
          className={`px-6 py-2 rounded-full ${
            tab === "Undergraduate"
              ? "bg-slate-900 text-amber-400 shadow-lg shadow-slate-900/25 ring-2 ring-amber-400/40"
              : "bg-gray-200"
          }`}
        >
          Undergraduate
        </button>

        <button
          onClick={() => setTab("Postgraduate")}
          className={`px-6 py-2 rounded-full ${
            tab === "Postgraduate"
              ? "bg-slate-900 text-amber-400 shadow-lg shadow-slate-900/25 ring-2 ring-amber-400/40"
              : "bg-gray-200"
          }`}
        >
          Postgraduate
        </button>

      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

{Object.keys(grouped).map((code, index) => {

  const course = grouped[code][0];

  const tags = [...new Set(grouped[code].flatMap(c => c.tags))];

  return (

    <article
      key={code}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300"
      style={{ animationDelay: `${index * 60}ms` }}
    >

      {/* Header */}
      <div className="relative min-h-28 bg-linear-to-r from-slate-900 to-slate-800 p-5 text-white">

        {/* Program Code */}
        <span className="absolute bottom-4 right-4 rounded-md bg-amber-400 px-2 py-1 text-[10px] font-bold text-slate-900">
          {course.code}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold leading-snug">
          {course.title}
        </h3>

        {/* specialization count */}
        <p className="mt-1 text-xs text-amber-300 font-medium">
          {grouped[code].length} Specializations
        </p>

      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {course.desc}
        </p>

        {/* Course Info */}
        <div className="mt-4 flex items-center justify-between text-sm">

          {/* Duration */}
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <HiClock className="text-amber-500 h-4 w-4" />
            {course.duration}
          </div>

          {/* UG / PG */}
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {course.type === "Undergraduate" ? "UG" : "PG"}
          </span>

        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700"
            >
              <HiCheckBadge className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => setSelectedCourse(grouped[code])}
          className="mt-5 w-full rounded-lg bg-amber-500 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          View Programs
        </button>

      </div>

    </article>

  );

})}

</div>

      {/* Modal */}
      {selectedCourse && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">

    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

      {/* Modal Header */}
      <div className="relative bg-linear-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">

        <h3 className="text-lg font-bold tracking-wide">
          {selectedCourse[0].code} Specializations
        </h3>

        <p className="text-xs text-amber-300 mt-1">
          Choose your preferred specialization
        </p>

        {/* Close button */}
        <button
          onClick={() => setSelectedCourse(null)}
          className="absolute right-4 top-4 rounded-md bg-white/10 px-2 py-1 text-xs font-semibold hover:bg-white/20"
        >
          ✕
        </button>

      </div>

      {/* Specialization List */}
      <div className="p-6 space-y-3">

        {selectedCourse.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-amber-300 hover:bg-amber-50"
          >
            <span className="text-sm font-medium text-slate-700">
              {course.specialization}
            </span>

            <span className="text-xs font-semibold text-amber-600">
              {course.duration}
            </span>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-4">

        <button
          onClick={() => setSelectedCourse(null)}
          className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-amber-400 transition hover:bg-slate-800"
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}

    </section>
  );
};

export default ProgramsSection;