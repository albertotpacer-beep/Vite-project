import { BsForkKnife } from "react-icons/bs";
import { FaPalette } from "react-icons/fa6";
import { MdOutlineMusicNote } from "react-icons/md";
import { RiCpuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const categoryIcons = {
  food: BsForkKnife,
  music: MdOutlineMusicNote,
  palette: FaPalette,
  cpu: RiCpuLine,
};

const Card = ({ category }) => {
  const Icon = categoryIcons[category.icon];

  return (
    <Link
      to={`/events?category=${encodeURIComponent(category.slug)}`}
      className="group relative block h-48 w-full overflow-hidden rounded-lg bg-cover bg-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:h-60"
      style={{ backgroundImage: `url("${category.image}")` }}
      aria-label={`Browse ${category.name} events`}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent transition group-hover:from-black/95" />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 text-white sm:px-5 sm:pb-5">
        {Icon && <Icon aria-hidden="true" className="mb-2 text-2xl" />}
        <p className="text-xl font-semibold sm:text-2xl">{category.name}</p>
        {category.description && (
          <p className="mt-1 text-sm text-white/75">{category.description}</p>
        )}
      </div>
    </Link>
  );
};

export default Card;
