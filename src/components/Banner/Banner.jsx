import { BannerDiv, BannerH1, BannerP } from "./banner.style";
import React from "react";
/**
 * Render a <Banner> component
 */
const Banner = () => {
  return (
    <BannerDiv>
      <BannerH1>conduit</BannerH1>
      <BannerP>A place to share your knowledge.</BannerP>
    </BannerDiv>
  );
};

export default Banner;
