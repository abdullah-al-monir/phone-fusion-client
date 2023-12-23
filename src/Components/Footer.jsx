import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-slate-800 text-white">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between items-center gap-5 pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Phone Fusion
            </span>
          </a>
          <p className="text-sm text-gray-100">
            © Copyright 2020 Phone Fusion. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-2xl"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-2xl"
            >
              <FaSquareInstagram />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
