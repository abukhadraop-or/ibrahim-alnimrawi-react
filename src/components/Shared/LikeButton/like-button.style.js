import styled from "styled-components";
import { ReactComponent as HeartImg } from "assets/images/heart.svg";

export const Heart = styled(HeartImg)`
  width: 25px;
  height: 25px;
`;

export const LikeButtonTag = styled.button`
  border: 1px solid #5cb85c;
  border-radius: 0.2rem;
  color: #5cb85c;
  background-color: #fff;
  height: 2rem;
  width: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;

  &:hover {
    path {
      fill: #fff;
    }

    background-color: #5cb85c;
    color: #fff;
  }
`;
