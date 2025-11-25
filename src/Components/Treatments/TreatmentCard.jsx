import { memo } from "react";

function TreatmentCard({ img, cardTitle, description, link, imgAlt }) {
  return (
    <>
      <a
        href={link}
        target="_block"
        rel="noopener noreferrer"
        className="snap-center shrink-0 md:max-w-[750px]  space-y-5 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out"
      >
        <img
          src={img}
          loading="lazy"
          className="w-full h-[480px] rounded-4xl object-cover"
          alt={imgAlt}
        />
        <div className="text-start mr-5">
          <h5 className="font-Cormorant text-3xl font-bold mb-2">
            {cardTitle}
          </h5>
          <p className="text-[#62635A]">{description}</p>
        </div>
      </a>
    </>
  );
}
export default memo(TreatmentCard);
