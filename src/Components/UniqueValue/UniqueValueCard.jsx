import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

function UniqueValueCard({ cardTitle, cardParagraph }) {
  return (
    <>
      <div className="rounded-4xl p-5 border flex flex-col justify-between border-gray-300 w-full h-85 shadow-sm">
        <div className="size-16 flex items-center justify-center bg-secondry text-primary rounded-full p-3 text-5xl shadow-md">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>

        <div className="space-y-3">
          <h5 className="text-4xl font-bold font-Cormorant">{cardTitle}</h5>
          <p className="max-w-[410px]">{cardParagraph}</p>
        </div>
      </div>
    </>
  );
}

export default memo(UniqueValueCard);
