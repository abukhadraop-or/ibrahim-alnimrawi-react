import React from "react";
import PropTypes from "prop-types";
const Input = ({ type, name, id, placeHolder }) => {
  return <input type={type} name={name} id={id} placeholder={placeHolder} />;
};

export default Input;
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeHolder: PropTypes.string,
};
