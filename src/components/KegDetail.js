import React from "react";
import PropTypes from "prop-types";
import pints from "./../img/pints.png"

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
          <div className="px-6 py-4">
            <img className="h-24" src={pints} alt="React Logo" />
              <div className="text-center">
                <h1 className="text-xl underline">Keg Detail</h1>
                <h3>Beer Name: {keg.name}</h3>
                <h4>Beer Style: {keg.style}</h4>
                <h4>ABV: {keg.abv}%</h4>
                <h4>Price: ${keg.price}</h4>
                <h4>Remaining Pints: {keg.remainingPints}</h4>
              </div>
            <hr/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;