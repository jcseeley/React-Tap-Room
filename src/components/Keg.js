import React from 'react';
import PropTypes from "prop-types";
import full from "./../img/full.png";
import half from "./../img/half.png";
import quarter from "./../img/quarter.png";
import kicked from "./../img/kicked.png";

function Keg(props){
  let beerPhoto = full;
  let kegQuantity = "NEARLY FULL";
  let textColor = "text-green-600";
  if (props.remainingPints < 82) {
    beerPhoto = half;
    kegQuantity = "BELOW 2/3 FULL";
    textColor = "text-yellow-600";
  } if (props.remainingPints < 31) {
    beerPhoto = quarter;
    kegQuantity = "LOW STOCK";
    textColor = "text-orange-600";
  } if (props.remainingPints === 0) {
    beerPhoto = kicked;
    kegQuantity = "KICKED!";
    textColor = "text-red-600";
  }
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="border-2 border-solid border-yellow-900 max-w-sm bg-yellow-100 rounded shadow-lg mt-2 mb-1">
          <div className="px-6 py-4">
            <div onClick = {() => props.whenKegClicked(props.id)}>
              <div className="flex items-center justify-center">
                <img className="h-24" src={beerPhoto} alt="beer" />
              </div>
              <div className="text-center">
                <h3>{props.name}</h3>
                <h4>Style: {props.style}</h4>
                <h4>ABV: {props.abv}%</h4>
                <h4>Price: ${props.price}</h4>
                <h4>Remaining Pints: {props.remainingPints}</h4>
                <h5 className={textColor}>{kegQuantity}</h5>
                <hr/>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="border-2 border-solid border-yellow-800 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold py-2 px-4 rounded-full mt-2" onClick={() => props.whenSellPintClicked(props.id) }>Sell Pint</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remainingPints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellPintClicked: PropTypes.func
};

export default Keg;