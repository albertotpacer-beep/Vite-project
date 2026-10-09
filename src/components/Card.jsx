const Card = (props) => {
  const Icon = props.icon;

  return (
    <div className={ `relative h-60 w-full  bg-cover bg-center`} style={{ backgroundImage: `url("${props.image}")` }}>
      <div className="absolute bottom-8 text-white text-4xl ">
        {Icon && <Icon />}
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
