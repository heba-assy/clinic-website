import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/imgs/logo-nav.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setISOpen] = useState(false);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <img src={logo} />

            <ul className="hidden md:flex gap-10 *:font-semibold text-lg">
              <li className="">
                <a href="#home" className="nav-underline">Home</a>
              </li>
              <li>
                <a href="#unique-value" className="nav-underline">Unique Value</a>
              </li>
              <li>
                <a href="#treatments" className="nav-underline">Treatments</a>
              </li>
              <li>
                <a href="#testimonials" className="nav-underline">Testimonials</a>
              </li>
            </ul>

            <a
              href="#contact"
              className="hidden md:block btn bg-white text-[#131008] text-lg py-4 hover:bg-primary hover:text-white"
            >
              Contact Us
            </a>

            {/* Hamburger Icon */}
            <button
              onClick={() => {
                setISOpen(!isOpen);
              }}
              className="md:hidden text-3xl text-[#61857B]"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {/* Off Canvas */}
        <button aria-label="Toggle menu"
          className={`absolute top-20 left-0 right-0 w-full h-screen z-50 bg-primary transform transition-transform duration-500 ease-in-out  ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } `}
        >
          <ul className="h-full px-5 *:w-full flex flex-col items-center text-center *:font-semibold text-2xl py-5 ">
            <li className="py-14 border-b border-white/50">
              <a href="#home" onClick={() => setISOpen(false)}>
                Home
              </a>
            </li>
            <li className="py-14 border-b border-white/50">
              <a href="#unique-value" onClick={() => setISOpen(false)}>
                Unique Value
              </a>
            </li>
            <li className="py-14 border-b border-white/50">
              <a href="#treatments" onClick={() => setISOpen(false)}>
                Treatments
              </a>
            </li>
            <li className="py-14 border-b border-white/50">
              <a href="#testimonials" onClick={() => setISOpen(false)}>
                Testimonials
              </a>
            </li>
            <li className="py-14 border-b border-white/50">
              <a href="#contact" onClick={() => setISOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </button>
      </div>
    </>
  );
}
