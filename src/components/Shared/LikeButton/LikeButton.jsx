import React from "react";
import PropTypes from "prop-types";
import { LikeButtonTag, Heart } from "./like-button.style";

/**
 * Render a <LikeButton> component
 *
 * @param {Number} props.count The number of likes.
 */
const LikeButton = ({ count }) => {
  return (
    <LikeButtonTag>
      <Heart />
      {count}
    </LikeButtonTag>
  );
};

export default LikeButton;

LikeButton.propTypes = {
  count: PropTypes.number,
};
