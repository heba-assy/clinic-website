import heroImg from "../../assets/imgs/Hero.png";
import Navbar from "../Navbar/Navbar";
import profilePhoto1 from "../../assets/imgs/profile-photo-1.jpg";
import profilePhoto2 from "../../assets/imgs/profile-photo-2.jpg";
import profilePhoto3 from "../../assets/imgs/profile-photo-3.jpg";

export default function Hero() {
  const bgColor = "#EEF2BF";
  const gridColor = "#E5ECA5";
  const gridSize = 120;
  const waveFill = "#EAEEBA";

  const bgImage = `linear-gradient(${gridColor} 2px, transparent 2px), linear-gradient(90deg, ${gridColor} 2px, transparent 2px) `;
  const bgSize = `${gridSize}px ${gridSize}px`;

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen"
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage,
        backgroundSize: bgSize,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Soft diagonal texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 10% 10%, rgba(255,255,255,0.03) 0%, transparent 25%), radial-gradient(ellipse at 90% 90%, rgba(0,0,0,0.02) 0%, transparent 20%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="container">
          <Navbar />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Hero Content */}
            <div className="text-center md:text-start mt-20">
              <h1 className="md:text-8xl text-6xl font-Cormorant font-black mb-5">
                Where <span className="italic">Beauty</span>
                <br />
                Meets Wellness
              </h1>
              <p className="md:text-3xl text-xl text-[#726E69]">
                Personalized aesthetic and wellness
                <br /> treatments tailored to you.
              </p>

              <div className="flex flex-col md:flex-row mx-auto gap-3 *:text-lg mt-8 w-3/4 md:w-4/4">
                <a href="#contact" className="btn">Book a Consultation</a>
                <a href="#unique-value" className="btn bg-white text-[#131008] hover:bg-primary hover:text-white">
                  Explore Services
                </a>
              </div>

              <div className="flex flex-col md:flex-row mb-10 md:mb-0 items-center gap-5 mt-8 text-[#726E69]">
                <p className="font-semibold">✓ Personalized treatment</p>

                <p className="font-semibold">✓ Expert practitioners</p>

                <p className="font-semibold">✓ Holistic approach</p>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative hidden md:block w-full h-screen">
              <img src={heroImg} className="w-full h-full object-cover" alt="Dermatology specialist performing skin treatment" />

              <span className="bg-white/10 backdrop-blur-lg absolute top-20 right-40 py-2 px-6 rounded-full text-[#FFFCF3] overflow-hidden text-lg border-white border">
                Hair Restoration
              </span>
              <span className="bg-white/10 backdrop-blur-lg absolute top-110 left-25 py-2 px-6 rounded-full text-[#FFFCF3] overflow-hidden text-lg border-white border">
                Natural Formula
              </span>
              <span className="bg-white/10 backdrop-blur-lg absolute bottom-40 right-45 py-2 px-6 rounded-full text-[#FFFCF3] overflow-hidden text-lg border-white border">
                Fotona Micropeel
              </span>
            </div>
          </div>

          <div className="absolute -bottom-35 md:bottom-35 md:left-55 flex items-center gap-3">
            <div className="relative flex">
              <img
                src={profilePhoto1}
                className="size-15 md:size-20 p-1 rounded-full object-cover bg-white"
              />
              <img
                src={profilePhoto2}
                className="absolute right-10 size-15 md:size-20 p-1 rounded-full object-cover bg-white z-1"
              />
              <img
                src={profilePhoto3}
                className="size-15 md:size-20 p-1 rounded-full object-cover bg-white z-3"
              />
            </div>

            <p className="text-sm md:text-lg font-semibold">
              <span className="text-[#60847A] font-semibold ">300+</span>
              Individuals who
              <br /> have trusted Lumiére
            </p>
          </div>
        </div>
      </div>

      {/* Decorative circular vignette */}
      <div
        aria-hidden
        className="absolute -right-48 -top-24 w-96 h-96 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%)`,
        }}
      />

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-0">
        <svg
          className="relative block w-full h-[50vh] blur-sm" // هنا الموجة تغطي نص الشاشة + blur
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.28-168.06-16.15-250.45,2.81C406.2,35.56,325.3,76,250.45,94.56,167.14,114.9,80,109.22,0,92.83V120H1200V95.8C1120,110.49,1043.18,110.16,985.66,92.83Z"
            fill={waveFill}
          />
        </svg>
      </div>
    </section>
  );
}
