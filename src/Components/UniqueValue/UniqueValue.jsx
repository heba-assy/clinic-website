import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UniqueValueImg from "../../assets/imgs/uniqueValueImg.jpg";
import UniqueValueCard from "./UniqueValueCard";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import serumImg from "../../assets/imgs/serum.jpg";
import skinCare1 from "../../assets/imgs/skinCare1.jpg";
import skinCare2 from "../../assets/imgs/skinCare2.jpg";
import skinCare3 from "../../assets/imgs/skinCare3.jpg";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";

export default function UniqueValue() {
  const cards = [
    {
      title: "Personalized Care",
      paragraph:
        "Every treatment is tailored to suit your unique skin type, goals, and lifestyle.",
    },
    {
      title: "Science & Expertise",
      paragraph:
        "Certified by experienced specialists using high-quality ingredients.",
    },
    {
      title: "Holistic Wellness",
      paragraph: " Our rituals combine relaxation with long-term skin health.",
    },
  ];
  return (
    <>
      <section id="unique-value" className="bg-[#FEFFF8] py-10 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-8 ">
              <h4 className="max-w-[730px]">
                Embrace Your Inner Peace and
                <span className="italic"> Discover True Beauty </span>at Lumiére
              </h4>
              <p className="text-2xl leading-snug mb-8 md:mb-0 max-w-[630px]">
                At Lumiére, We believe beauty grows from calm. Each treatment is
                thoughfully designed to relax your mind and care for your body
                with gentle attention.
              </p>
            </div>

            <img
              src={UniqueValueImg}
              className="w-80 h-100 rounded-[999px] object-cover"
              alt="Hydrafacial deep cleansing treatment"
            />
          </div>

          {/* Unique Value Card */}
          <div className="flex flex-col md:flex-row gap-8 my-16">
            {cards.map((card, index) => (
              <UniqueValueCard
                key={index}
                cardTitle={card.title}
                cardParagraph={card.paragraph}
              />
            ))}
          </div>

          <div className="pt-16">
            <div className="flex flex-col md:flex-row items-end justify-between">
              <h4 className="max-w-[810px]">
                Where Care <span className="italic">Meets Innovation,</span> and
                Every Detail Reflects a Promise to You
              </h4>

              <p className="text-2xl max-w-[510px]">
                At Lumiére, we believe beauty grows from calm.
                Each treatment is thoughtfully designed to relax your
                mind and care for your body with gentle attention.
              </p>
            </div>
          </div>

          <div className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8 *:max-h-110">
            <div className="bg-[#F4F8D0] rounded-4xl p-10 text-center flex flex-col items-center justify-center">
              <div className="relative ">
                <FontAwesomeIcon icon={faLink} className="mb-5 text-5xl" />
                <div className="flex flex-col items-center  text-5xl font-bold font-Cormorant leading-13 mb-5">
                  <h5>Relaxing</h5>
                  <h5>Message</h5>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="absolute top-27 right-5 md:right-13 size-20 -rotate-30"
                >
                  <path
                    d="M224 104C224 81.9 241.9 64 264 64C286.1 64 304 81.9 304 104L304 252.2C312.5 244.6 323.7 240 336 240C356.6 240 374.2 253 381 271.2C389.8 261.9 402.2 256 416 256C441.3 256 462 275.5 463.9 300.3C472.4 292.6 483.7 288 496 288C522.5 288 544 309.5 544 336L544 448C544 518.7 486.7 576 416 576L330.7 576C325.7 576 320.8 575.7 316 575C260.7 569.4 209.8 541 176 496L104 400C90.7 382.3 94.3 357.3 112 344C129.7 330.7 154.7 334.3 168 352L224 426.7L224 104zM336 368C336 359.2 328.8 352 320 352C311.2 352 304 359.2 304 368L304 464C304 472.8 311.2 480 320 480C328.8 480 336 472.8 336 464L336 368zM384 352C375.2 352 368 359.2 368 368L368 464C368 472.8 375.2 480 384 480C392.8 480 400 472.8 400 464L400 368C400 359.2 392.8 352 384 352zM464 368C464 359.2 456.8 352 448 352C439.2 352 432 359.2 432 368L432 464C432 472.8 439.2 480 448 480C456.8 480 464 472.8 464 464L464 368z"
                    fill="#FEFFF8"
                    stroke="black"
                    strokeWidth="20"
                  />
                </svg>

                <p className="mb-8">
                  Light to medium pressure to ease daily tension and promote new
                  energy.
                </p>

                <a href="#treatments" className="btn">Learn More</a>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden">
              <img src={serumImg} alt="Vitamin C serum for glowing skin"/>
            </div>

            <div className="bg-[#F4F8D0] flex flex-col items-center justify-center rounded-4xl p-10 text-center">
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                className="mb-5 text-5xl"
              />
              <div className="text-5xl font-bold font-Cormorant leading-13 mb-3">
                <h5>Acne</h5>
                <h5>Treatment</h5>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden">
              <img src={skinCare1} alt="Licensed skincare clinic interior"/>
            </div>

            <div className="bg-[#F4F8D0] flex flex-col items-center justify-center rounded-4xl p-10 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.13 3.655a3.18 3.18 0 0 1 3.74 0l6.069 4.409a3.18 3.18 0 0 1 1.155 3.557l-2.318 7.134a3.18 3.18 0 0 1-3.025 2.198H8.249a3.18 3.18 0 0 1-3.025-2.198L2.906 11.62A3.18 3.18 0 0 1 4.06 8.063z"
                />
              </svg>
              <div className="text-5xl font-bold font-Cormorant leading-13 mb-3">
                <h5>Fatona</h5>
                <h5>Micropeel</h5>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden">
              <img src={skinCare2} alt="Microneedling treatment session"/>
            </div>

            <div className="bg-[#F4F8D0] flex flex-col items-center justify-center rounded-4xl p-10 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="20"
                  strokeDashoffset="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12 5c0 0 5 6 5 9c0 2.76 -2.24 5 -5 5">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="20;0"
                    />
                  </path>
                  <path d="M12 5c0 0 -5 6 -5 9c0 2.76 2.24 5 5 5">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="20;0"
                    />
                  </path>
                </g>
              </svg>
              <div className="text-5xl font-bold font-Cormorant leading-13 mb-3">
                <h5>Hydrating</h5>
                <h5>Facial</h5>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden">
              <img src={skinCare3} alt="Skin texture improvement after fractional laser"/>
            </div>

            <div className="bg-[#F4F8D0] flex flex-col items-center justify-center rounded-4xl p-10 text-center">
              <svg
                width="80"
                height="80"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.751 1.375c-.025 6.281 3.029 9.844 10 10c-6.465-.025-9.672 3.441-10 10c-.063-6.187-2.828-10.009-10-10c6.416-.09 9.975-3.187 10-10m8.261 0v4m-2-2h4m.238 15.25v4m-2-2h4"
                />
              </svg>
              <div className="text-5xl font-bold font-Cormorant leading-13 mb-3">
                <h5>Glow</h5>
                <h5>Facial</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
