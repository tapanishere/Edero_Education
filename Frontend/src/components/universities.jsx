import React from "react";
import jain from '../assets/images/jain.jpeg'
import Chandigarh from '../assets/images/Chandigarh.png'
import Patil from '../assets/images/Patil.png'
import op_jindal from '../assets/images/op-jindal.png'
import Vivekananda  from '../assets/images/Vivekananda.png'
import Alliance from '../assets/images/Alliance.png'
import Vignans from '../assets/images/Vignans.png'
import vistas from '../assets/images/VISTAS.jpg'
import Uttaranchal from '../assets/images/Uttaranchal.png'
import sikkim_manipal from '../assets/images/sikkim_manipal.png'
import manipal from '../assets/images/manipal.png'
import lpu from '../assets/images/lpu.png'
import UPEs from '../assets/images/UPES.jpg'
import gla from '../assets/images/gla.jpg'
import Amity_University from '../assets/images/Amity-University.png'
import amrita from '../assets/images/amrita.png'
import Shoolini from '../assets/images/Shoolini.png'
import kukshetraru from '../assets/images/kukshetraru.png'
import manipal_academy from '../assets/images/manipal_academy.png'
import sharda from '../assets/images/sharda.png'
import parul from '../assets/images/parul.png'
import nmims from '../assets/images/nmims.webp'
import galgotias from '../assets/images/galgotias.jpg'
import SRM_Institute from '../assets/images/SRM_Institute.png'
const universities = [
  {logo:jain},
  {logo:Chandigarh},
  {logo:Patil},
  {logo:op_jindal},
 {logo:Vivekananda},
 {logo:Alliance},
 {logo:Vignans},
  {logo:vistas},
  {logo:Uttaranchal},
  {logo:sikkim_manipal},
  {logo:lpu},
  {logo:UPEs},
  {logo:gla},
  {logo:Amity_University},
  {logo:manipal},
{logo:amrita},
{logo:Shoolini},
{logo:kukshetraru},
{logo:manipal_academy},
{logo:sharda},
{logo:parul},
{logo:nmims},
{logo:galgotias},
{logo:SRM_Institute}
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

