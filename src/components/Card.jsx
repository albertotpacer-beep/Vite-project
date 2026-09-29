import React from "react";
import { MdOutlineMusicNote } from "react-icons/md";


const Card = (props) => {
  return (
    <div className={ `relative h-60 w-full  bg-cover bg-center`} style={{ backgroundImage: `url("${props.image}")` }}>
      <div className="absolute bottom-8 text-white text-4xl ">
        {props.icon}
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
