import React from "react";
import Card from "./Card";

const Cards = ({citiesDataa , removeHandler }) => {
  return (
    <div className="container">
      <h1 className="title">JANA KITE ?</h1>

      <div className="cards">
        {citiesDataa.map((city) => {
          return ( <div key ={city.id} >
            <Card {...city} removeHandler={removeHandler}></Card> </div>);
        })}
      </div>
    </div>
  );  
};

export default Cards;
