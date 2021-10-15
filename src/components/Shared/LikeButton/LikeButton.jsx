import React from "react";
import PropTypes from "prop-types";
import { LikeButtonTag, Heart } from "./like-button.style";
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
