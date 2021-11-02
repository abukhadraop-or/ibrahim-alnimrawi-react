import colors from 'style/colors';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: default;
  margin: 0 2rem;
`;
/* istanbul ignore next */
export const PaginateItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.active ? `${colors.moderateLimeGreen}` : `${colors.white}`};
  color: ${(props) =>
    props.active ? `${colors.white}` : `${colors.moderateLimeGreen}`};
  border: 0.063rem solid ${colors.veryLightGray};
  width: 2rem;
  height: 2rem;

  &:hover {
    background-color: ${colors.veryLightGray};
  }

  &:active {
    border: 0.063rem solid ${colors.black};
  }
`;
