import React from 'react';
import { BannerDiv, BannerH1, BannerP } from './banner.style';

/**
 * Render a <Banner> component
 *
 * @return {JSX.Element}
 */
const Banner = () => (
  <BannerDiv>
    <BannerH1>conduit</BannerH1>
    <BannerP>A place to share your knowledge.</BannerP>
  </BannerDiv>
);

export default Banner;
