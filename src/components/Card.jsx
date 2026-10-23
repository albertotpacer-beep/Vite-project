const Card = (props) => {
  const Icon = props.icon;

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg bg-cover bg-center sm:h-60" style={{ backgroundImage: `url("${props.image}")` }}>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-white sm:px-5 sm:pb-5">
        {Icon && <Icon />}
        <p className="text-xl font-semibold sm:text-2xl">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
