import React from "react";
import jain from '../assets/images/jain.jpeg'
import Chandigarh from '../assets/images/Chandigarh.png'
import Patil from '../assets/images/Patil.png'
import op_jindal from '../assets/images/op-jindal.png'
import Vivekananda  from '../assets/images/Vivekananda.png'
import Alliance from '../assets/images/Alliance.png'
import  Vignans from '../assets/images/Vignans.png'
import vistas from '../assets/images/VISTAS.jpg'
const universities = [
  {logo:jain},
  {logo:Chandigarh},
  {logo:Patil},
  {logo:op_jindal},
 {logo:Vivekananda},
 {logo:Alliance},
 {logo:Vignans},
  {logo:vistas},

];

const Universities = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-600">
            Recognized &amp; Accredited Excellence
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Partnered with NAAC A+ &amp; NIRF-ranked universities
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Delivering high-quality online education through collaborations with
            leading universities across India.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:mt-10 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {universities.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-center text-[11px] font-medium text-slate-700 shadow-xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md sm:text-xs md:text-sm"
              >
                <img src={name.logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;

