import { ReactComponent as HeartImg } from "assets/images/heart.svg";
import styled from "styled-components";
import colors from "../../../services/colors";

export const Heart = styled(HeartImg)`
  width: 1.563rem;
  height: 1.563rem;
`;

export const LikeButtonTag = styled.button`
  border: 0.063rem solid ${colors.moderateLimeGreen};
  border-radius: 0.2rem;
  color: ${colors.moderateLimeGreen};
  background-color: ${colors.white};
  height: 2rem;
  width: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;

  &:hover {
    path {
      fill: ${colors.white};
    }

    background-color: ${colors.moderateLimeGreen};
    color: ${colors.white};
  }
`;
