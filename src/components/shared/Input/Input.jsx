import PropTypes from 'prop-types';
import React from 'react';

/**
 * Render a <Input> component
 *
 * @param {Object} props             The props object.
 * @param {String} props.type        The type of the input.
 * @param {String} props.name        The name of the input.
 * @param {String} props.id          The id of the input.
 * @param {String} props.placeHolder The place holder of the input.
 *
 * @return {JSX.Element}
 */
const Input = ({ type, name, id, placeHolder }) => (
  <input type={type} name={name} id={id} placeholder={placeHolder} />
);

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeHolder: PropTypes.string,
};
Input.defaultProps = {
  type: '',
  name: '',
  id: '',
  placeHolder: '',
};
