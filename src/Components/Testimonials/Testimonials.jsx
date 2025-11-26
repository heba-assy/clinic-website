import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testimonialImg from "../../assets/imgs/testimonials.webp";
import {
  faChevronLeft,
  faChevronRight,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="bg-[#F9FBEF] py-10 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Content -- Testimonials */}
            <div className="overflow-hidden">
              <h4 className="mb-5">
                Proof in Every
                <br /> <span className="italic">Transformation</span>
              </h4>
              <p className="text-2xl md:text-3xl">
                Every glow tells a story-discover the
                <br /> difference expert care can make.
              </p>
              <div className="flex gap-3 mt-10 mb-14">
                <a href="#contact" className="btn">
                  Book a consultation
                </a>
                <a
                  href="#unique-value"
                  className="btn bg-white text-[#131008] hover:bg-primary hover:text-white"
                >
                  Explore Services
                </a>
              </div>

              {/* Testimonials */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                pagination={false}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                className=""
              >
                <SwiperSlide>
                  <div className="flex items-center gap-1 text-[#FE9E41] *:text-lg mb-8">
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                  </div>

                  <div className="space-y-8">
                    <h5 className="text-3xl">
                      "After my microneedling session, my skin
                      <br /> feels smoother and I finally feel confident
                      <br /> without makeup!"
                    </h5>
                    <div className="flex *:text-lg">
                      <span className="pr-3 border-r-2 border-gray-200 font-semibold">
                        Sarah k
                      </span>
                      <span className="pl-3">Employee</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex items-center gap-1 text-[#FE9E41] *:text-lg mb-8">
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={regularStar} />
                  </div>

                  <div className="space-y-8">
                    <h5 className="text-3xl">
                      "After my fractional laser session, my skin
                      <br /> feels so much smoother, and I finally
                      <br />
                      feel confident without any makeup!"
                    </h5>
                    <div className="flex *:text-lg">
                      <span className="pr-3 border-r-2 border-gray-200 font-semibold">
                        Farah m
                      </span>
                      <span className="pl-3">Client</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Navigation */}
              <div className="flex gap-2 mt-5 *:cursor-pointer">
                <button className="prev-btn size-14 rounded-full flex items-center justify-center bg-white p-3 border-2 border-gray-200/70 hover:bg-primary hover:text-white transition-colors duration-500">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button className="next-btn size-14 rounded-full flex items-center justify-center bg-white p-3 border-2 border-gray-200/70 hover:bg-primary hover:text-white transition-colors duration-500">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="hidden md:block relative rounded-4xl overflow-hidden max-w-[700px] max-h-[80phe0px]">
              <img src={testimonialImg} loading="lazy" className="w-full object-cover" alt="Before and after microneedling results showing reduced acne and clearer skin"/>
              <div className="absolute bg-white size-18 rounded-full flex items-center justify-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
              </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
