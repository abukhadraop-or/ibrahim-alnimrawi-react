import PropTypes from "prop-types";
import React from "react";
import { Heart, LikeButtonTag } from "./like-button.style";

/**
 * Render a <LikeButton> component
 *
 * @param {Number} props.count The number of likes.
 *
 * @return {JSX.Element}
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
