import colors from 'style/colors';
import mediaQueries from 'style/media-queries';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
`;

export const FeedLi = styled.li`
  border-bottom: 0.188rem solid ${colors.moderateLimeGreen};
  box-sizing: inherit;
  color: ${colors.moderateLimeGreen};
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

  @media (max-width: ${mediaQueries.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
`;
