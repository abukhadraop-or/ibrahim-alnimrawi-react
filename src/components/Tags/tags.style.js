import styled from "styled-components";
export const TagsDiv = styled.div`
  align-items: center;
  border-radius: 0.25rem;
  color: #373a3c;
  display: flex;
  height: 3rem;
  justify-content: center;
  position: relative;
  width: 8rem;
`;
export const Tag = styled.div`
  align-items: center;
  background-color: ${(props) => (props.selected ? `#2F3236` : `#7d858e`)};
  border-radius: 0.35rem;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0.25rem 0.5rem;
  max-height: 2.5rem;
  min-width: 4rem;
  padding: 0.25rem;
`;

export const PopTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TagsContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  margin-right: 3rem;
  max-width: 20rem;
  padding-bottom: 2rem;
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`;
export const NotFound = styled.div`
  color: #373a3c;
  margin: 1rem 3rem;
`;
