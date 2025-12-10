import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-4 sm:p-5 transition duration-300 hover:shadow-lg ${
        style || ""
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        } text-center center rounded-md`}
      >
        {data?.icon ? (
          <FontAwesomeIcon
            icon={data.icon}
            className="text-2xl sm:text-3xl"
            color={hover ? "#FFFFFF" : "#A53DFF"}
          />
        ) : (
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-sm:p-2 sm:w-8 sm:h-8"
          >
            <path d={data?.svgPath} fill={`${hover ? "#FFFFFF" : "#A53DFF"}`} />
          </svg>
        )}
      </div>
      <div className="mt-2 xs:mt-3 sm:mt-4">
        <p className="font-semibold text-sm sm:text-base">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-2 text-xs sm:text-sm text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
