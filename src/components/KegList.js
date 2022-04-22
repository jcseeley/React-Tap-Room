import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import pints from "./../img/pints";

function KegList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
          <div className="flex items-center justify-center">
            <img className="h-12 w-21" src={pints} alt="React Logo" />
            <br/>
          </div>
          <div className="px-6 py-4">
            <p className="text-center text-gray-700 text-base">
              <Keg 
                whenKegClicked = { props.onKegSelection }
                name={keg.name}
                style={keg.style}
                abv={keg.abv}
                price={keg.price}
                remainingPints={keg.remainingPints}
                id={keg.id}
                key={keg.id}/>
            </p>
          </div>
        </div>
      </div>
      )}
    </React.Fragment>
  );
}

KegList.proptypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;