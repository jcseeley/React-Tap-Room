import React from "react";
import pints from "./../img/pints.png"

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <img className="h-52" src={pints} alt="Pints of beer" />
      </div>
      <hr />
      <h1 className="text-center font-medium leading-tight text-4xl mt-2 mb-2">Keg Manager</h1>
      <hr />
    </React.Fragment>
  );
}

export default Header;