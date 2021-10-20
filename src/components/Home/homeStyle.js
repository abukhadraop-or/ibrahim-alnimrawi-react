import styled from "styled-components";

export const Container = styled.div`
  display: grid;
`;
export const FeedLi = styled.li`
  border-bottom: 0.188rem solid #5cb85c;
  box-sizing: inherit;
  color: #5cb85c;
  cursor: default;
  margin-bottom: 0;
  margin-right: 0.5rem;
`;
export const FeedUl = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  margin-left: 2.5rem;
`;
export const MediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;
