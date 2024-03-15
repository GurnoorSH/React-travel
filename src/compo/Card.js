import React from "react";
import { useState } from "react";

const Card = ({ city, price, description, img, removeHandler,id }, ) => {
  const [readmore, setreadmore] = useState(false);

  const info = readmore ? `${description.substring(0, 10)}....` : description;

  function readmoreHandler() {
    setreadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={img} className="img"></img>
      
      <div className="tour-info">
      <div className="details">
      <h4 className="city"> {city}</h4>
      <h4 className="price"> {price} </h4>
      </div>
      
      {/* <div> {description} </div> */}
      <div className="
      info">
      <div > {info}</div>
      <button className=" readmore" onClick={readmoreHandler}>
        {" "}
        {readmore ? "readmore" : "see less"}{" "}
      </button>
        </div>
</div>

      <button className="btnred"onClick={() => removeHandler(id)}>NOT INTERESTED  </button>
    </div>
  );
};

export default Card;
