import { FiMapPin } from "react-icons/fi";
import { MdOutlineCalendarToday } from "react-icons/md";

const EventCard = (props) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-800 bg-[#211E2D] text-white transition duration-300 hover:-translate-y-1 hover:border-[#7C3AED]">

      {/* Event Image */}
      <div className="relative h-45 overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        {/* Category */}
        <span className="absolute bottom-3 left-3 rounded-md bg-[#7C3AED] px-3 py-1 text-xs font-semibold">
          {props.category}
        </span>

        {/* Heart Button */}
        <button
          aria-label={`Save ${props.title}`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl hover:bg-[#7C3AED]"
        >
          ♡
        </button>
      </div>

      {/* Event Information */}
      <div className="p-4">
        <h3 className="mb-3 text-base font-semibold">
          {props.title}
        </h3>

        <p className="mb-2 flex items-center gap-2 text-xs text-gray-400">
          <MdOutlineCalendarToday className="text-sm" />
          <span>{props.date}</span>
        </p>

        <p className="mb-4 flex items-center gap-2 text-xs text-gray-400">
          <FiMapPin className="text-sm" />
          <span>{props.location}</span>
        </p>

        {/* Price and Details */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <span className="text-sm font-semibold text-[#A476FF]">
            {props.price === "Free"
              ? "Free"
              : `From ${props.price}`}
          </span>

          <button className="text-xs text-gray-300 hover:text-[#A476FF]">
            Details →
          </button>
        </div>
      </div>

    </div>
  );
};

export default EventCard;