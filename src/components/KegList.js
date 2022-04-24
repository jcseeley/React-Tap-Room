import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      <hr/>
      <div className="grid grid-cols-4">
        {props.kegList.map((keg) =>
          <Keg
            whenKegClicked = { props.onKegSelection }
            whenSellPintClicked = { props.onSellingPint }
            name={keg.name}
            style={keg.style}
            abv={keg.abv}
            price={keg.price}
            remainingPints={keg.remainingPints}
            id={keg.id}
            key={keg.id} />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;