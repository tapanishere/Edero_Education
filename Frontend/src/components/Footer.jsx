import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-200 pt-10 pb-6 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-700 pb-10">
          {/* Brand & description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Logo/clint_img1_remove.png"
                alt="Edero Education Logo"
                className="w-10 h-10"
              />
              <h2 className="text-xl font-semibold tracking-wide">
                EDERO <span className="font-normal">EDUCATION</span>
              </h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Empowering students with innovative learning and career success.
            </p>
            <p className="text-sm text-gray-400">
              1234 Education Lane,
              <br />
              City, State, 56789
            </p>
            <p className="text-sm text-amber-400 mt-3">
              NAAC A++ Accredited | NIRF Rank 62
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">
              Quick Links
            </h3>
            <div className="h-px w-10 bg-amber-400 mb-4" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">
              Programs
            </h3>
            <div className="h-px w-10 bg-amber-400 mb-4" />
            <ul className="space-y-2 text-sm">
              <li>B.Tech</li>
              <li>BBA</li>
              <li>MBA</li>
              <li>M.Tech</li>
              <li>PhD</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">
              Contact Us
            </h3>
            <div className="h-px w-10 bg-amber-400 mb-4" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-400" />
                <span>+91 78 1199 6806</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400" />
                <span>ederoeducation@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <span>
                West Bengal
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 text-xs md:text-sm text-gray-400">
          <p>© 2026 Edero Education. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              to="/terms"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

