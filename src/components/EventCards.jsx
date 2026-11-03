import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/useFavorites";

const EventCard = ({ id, image, category, title, date, location, price }) => {
  const { favoriteIds, user, toggleFavorite, setError } = useFavorites();
  const [saving, setSaving] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  const isFavorite = favoriteIds.includes(String(id));

  async function handleFavorite(event) {
    event.preventDefault();
    event.stopPropagation();
    setSaving(true);
    const result = await toggleFavorite(id);
    setError(result.error);
    setActionMessage(result.error);
    setSaving(false);
  }

  return (
    <article className="relative w-full overflow-hidden rounded-lg border border-gray-800 bg-[#211E2D] text-white transition duration-200 hover:-translate-y-1 hover:border-violet-500">
      <Link
        to={`/events/${id}`}
        aria-label={`View details for ${title}`}
        className="block focus-visible:ring-2 focus-visible:ring-violet-400"
      >
        <div className="relative h-48 overflow-hidden sm:h-52">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 rounded bg-violet-700 px-3 py-1 text-xs font-semibold">
            {category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="mb-3 pr-9 text-base font-semibold">{title}</h3>
          <p className="mb-2 flex items-start gap-2 text-sm text-gray-400">
            <MdOutlineCalendarToday aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>{date}</span>
          </p>
          <p className="mb-4 flex items-start gap-2 text-sm text-gray-400">
            <FiMapPin aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>{location}</span>
          </p>
          <div className="flex items-center justify-between border-t border-gray-700 pt-4">
            <span className="text-sm font-semibold text-violet-300">
              {price === "Free" ? "Free" : `From ${price}`}
            </span>
            <span className="text-sm text-gray-300">Details →</span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={handleFavorite}
        disabled={saving}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Remove ${title} from favourites` : `Save ${title} to favourites`}
        title={!user ? "Sign in to save favourites" : undefined}
        className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-black/70 text-xl text-white hover:bg-violet-700 disabled:opacity-60"
      >
        <HiHeart aria-hidden="true" className={isFavorite ? "text-red-400" : "text-white"} />
      </button>
      {actionMessage && (
        <p role="status" className="absolute right-2 top-14 max-w-48 rounded bg-black/90 px-2 py-1 text-xs text-white">
          {actionMessage}
        </p>
      )}
    </article>
  );
};

export default EventCard;
