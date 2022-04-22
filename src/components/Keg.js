import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.style}</h4>
        <h4>{props.abv}</h4>
        <h4>{props.price}</h4>
        <h4>{props.remainingPints}</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  remainingPints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;