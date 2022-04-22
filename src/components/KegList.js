import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          sellPint = { props.onSellPint }
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          style={keg.style}
          abv={keg.abv}
          price={keg.price}
          remainingPints={keg.remainingPints}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;