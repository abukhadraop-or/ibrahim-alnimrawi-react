import mediaQueries from "services/mediaQueries";
import styled from "styled-components";
import colors from "../..//services/colors";
export const TagsDiv = styled.div`
  align-items: center;
  border-radius: 0.25rem;
  color: ${colors.veryDarkGrayishBlue};
  display: flex;
  height: 3rem;
  justify-content: center;
  position: relative;
  width: 8rem;
`;
export const Tag = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.selected
      ? `${colors.veryDarkGrayishBlue3}`
      : `${colors.darkGrayishBlue}`};
  border-radius: 0.35rem;
  border: none;
  color: ${colors.white};
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
  background-color: ${colors.veryLightGray_mostlyWhite};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  margin-right: 3rem;
  max-width: 20rem;
  padding-bottom: 2rem;
  @media (max-width: ${mediaQueries.mobile}) {
    margin: 0 auto;
    width: 100%;
  }
`;
export const NotFound = styled.div`
  color: ${colors.veryDarkGrayishBlue};
  margin: 1rem 3rem;
`;
