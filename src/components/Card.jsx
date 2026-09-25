import React from "react";
import { MdOutlineMusicNote } from "react-icons/md";


const Card = (props) => {
  return (
    <div className={ `relative h-60 w-full ${props.image} bg-cover bg-center`}>
      <div className="absolute bottom-8 text-white text-4xl ">
        {props.icon}
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
