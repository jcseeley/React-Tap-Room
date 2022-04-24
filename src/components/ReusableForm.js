import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="border-2 border-solid border-yellow-900 max-w-sm bg-yellow-100 rounded overflow-hidden shadow-lg mb-2 mt-2">
          <form className="bg-yellow-100 shadow-sm rounded px-8 pt-6 pb-8" onSubmit={props.formSubmissionHandler}>
            <input className=" border-2 border-solid border-yellow-900 shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='name'
              placeholder='Beer Name' required/>
            <input className="border-2 border-solid border-yellow-900 shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='style'
              placeholder='Beer Style' required/>
            <input className="border-2 border-solid border-yellow-900 shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='abv'
              placeholder='ABV' required/>
            <input className="border-2 border-solid border-yellow-900 shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='price'
              placeholder='Pint Price' required/>
            <div className="flex justify-center">
              <button className="border-2 border-solid border-yellow-800 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold py-2 px-4 rounded-full" type='submit'>{props.buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;