import React from "react";
import pints from "./../img/pints.png"

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <img className="h-60" src={pints} alt="Pints of beer" />
      </div>
      <div className="flex items-center justify-center">
      <img src="https://fontmeme.com/permalink/220424/ce50ff9d9cfc3aaa15b7569afff031ae.png" alt="Tap Roon text" />
      </div>
    </React.Fragment>
  );
}

export default Header;