import React from "react";

const Contactbody = () => {
  return (
    <section className="w-full bg-slate-300 bg-slate-95 text-white">
      {/* Hero */}
      <div
        className="relative w-full bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:py-20 lg:py-24">
          <h1 className="text-3xl font-semibold tracking-wide sm:text-4xl lg:text-5xl">
            Contact <span className=" text-amber-500 ">Us</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">
            Have any <span className="text-amber-500"> questions?</span> Get in touch with us.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-6xl justify-center gap-10 px-4 py-10  lg:py-16">
        {/* Quick Contact */}
        <div className="w-full rounded-xl bg-slate-900/80 p-6 shadow-xl shadow-black/40 ring-1 ring-slate-800/80 lg:w-5/12">
          <h2 className="text-xl font-semibold tracking-wide text-amber-300 sm:text-2xl">
            Quick Contact
          </h2>
          <div className="mt-6 space-y-5 text-sm text-slate-100 sm:text-base">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-.91 1 17 17 0 01-7.39-2.48A16.82 16.82 0 014.06 9.7 17 17 0 011.5 2.33 1 1 0 012.48 1.5H5.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.01z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-slate-50">Phone</p>
                <p className="text-slate-200/80">+91 78 1199 6806</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M4 4h16a2 2 0 012 2v.01L12 13 2 6.01V6a2 2 0 012-2z" />
                  <path d="M2 8.24V18a2 2 0 002 2h16a2 2 0 002-2V8.24l-9.12 6.08a2 2 0 01-2.16 0z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-slate-50">Email</p>
                <p className="text-slate-200/80">ederoeducation@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-slate-50">Address</p>
                <p className="text-slate-200/80">
                West Bengal
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactbody;

