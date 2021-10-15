import styled from "styled-components";
export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: default;
  margin: 0 2rem;
`;
export const PaginateItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #5cb85c;
  border: 1px solid #ddd;
  width: 2rem;
  height: 2rem;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    border: 1px solid #000;
  }
`;
export const ActiveItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5cb85c;
  color: #fff;
  border: 1px solid #ddd;
  width: 2rem;
  height: 2rem;
`;
