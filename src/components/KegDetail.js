import React from "react";
import PropTypes from "prop-types";
import full from "./../img/full.png";
import half from "./../img/half.png";
import quarter from "./../img/quarter.png";
import kicked from "./../img/kicked.png";

function KegDetail(props){
  const { keg } = props;
  let beerPhoto = full;
  let kegQuantity = "NEARLY FULL";
  let textColor = "text-green-600";
  if (keg.remainingPints < 82) {
    beerPhoto = half;
    kegQuantity = "BELOW 2/3 FULL";
    textColor = "text-yellow-600";
  } if (keg.remainingPints < 31) {
    beerPhoto = quarter;
    kegQuantity = "LOW STOCK";
    textColor = "text-orange-600";
  } if (keg.remainingPints === 0) {
    beerPhoto = kicked;
    kegQuantity = "KICKED!";
    textColor = "text-red-600";
  }
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="border-2 border-solid border-yellow-900 max-w-xl bg-yellow-100 rounded overflow-hidden shadow-lg mt-2 mb-2">
          <div className="px-6 py-4">
            <div className="flex items-center justify-center">
              <img className="h-24" src={beerPhoto} alt="React Logo" />
            </div>
            <div className="text-center">
              <h5 className={textColor}>{kegQuantity}</h5>
              <h1 className="text-xl underline">Keg Detail</h1>
              <h3>Beer: {keg.name}</h3>
              <h4>Style: {keg.style}</h4>
              <h4>ABV: {keg.abv}%</h4>
              <h4>Price: ${keg.price}</h4>
              <h4>Remaining Pints: {keg.remainingPints}</h4>
            </div>
            <hr/>
          </div>
          <button className="border-2 border-solid border-yellow-700 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold py-2 px-2 rounded-full ml-2" onClick={ props.onClickingEdit }>Update Keg</button>
          <button className="border-2 border-solid border-yellow-800 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold py-2 px-2 rounded-full mb-2 mr-2" onClick={() => props.onClickingDelete(keg.id) }>Delete Keg</button>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;