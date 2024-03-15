import { useState } from "react";
import "./App.css";
import Cards from "./compo/Cards";
import citiesData from './compo/data'


function App(id) {

  const [citiesDataa, setcitiesDataa] = useState(citiesData)

  
  function removeHandler(id) {
    const newdata = citiesDataa.filter( x => x.id !== id)
    setcitiesDataa(newdata);
  }

  if (citiesDataa.length===0){
    return (
      <div className="refresh">
        <h2>
          NO tours left 
        </h2>
        <button className="btnw" onClick={()=> setcitiesDataa(citiesData )}>Refresh </button>
      </div>
    )
  }

  return (
    <div>
  
      <Cards citiesDataa={citiesDataa} removeHandler={removeHandler} ></Cards>
    </div>
  );
}

export default App;
