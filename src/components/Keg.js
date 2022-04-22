import React from 'react';
import PropTypes from "prop-types";
import pints from "./../img/pints.png";

function Keg(props){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
          <div className="px-6 py-4">
            <div onClick = {() => props.whenKegClicked(props.id)}>
              <img className="h-24" src={pints} alt="pints of beer" />
              <div className="text-center text-gray-700 text-base">
                <h3>Beer Name: {props.name}</h3>
                <h4>Beer Style: {props.style}</h4>
                <h4>ABV: {props.abv}%</h4>
                <h4>Price: ${props.price}</h4>
                <h4>Remaining Pints: {props.remainingPints}</h4>
                <hr/>
                <br></br>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" >Sell Pint</button>
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
};

export default Keg;