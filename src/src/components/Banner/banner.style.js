import styled from "styled-components";
import colors from "../../services/colors";
export const BannerDiv = styled.div`
  align-items: center;
  background-color: ${colors.moderateLimeGreen};
  border: none;
  box-shadow: inset 0 0.5rem 0.5rem -0.5rem rgb(0 0 0 / 30%),
    inset 0 -0.5rem 0.5rem -0.5rem rgb(0 0 0 / 30%);
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-top: 0;
  padding: 1rem;
`;
export const BannerH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 0.063rem 0.188rem rgb(0 0 0 / 30%);
`;
export const BannerP = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0;
  text-align: center;
`;
