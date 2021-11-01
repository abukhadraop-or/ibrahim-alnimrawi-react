import colors from 'style/colors';
import mediaQueries from 'style/media-queries';
import styled from 'styled-components';

export const ArticleHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ArticleSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleUser = styled.div`
  color: ${colors.moderateLimeGreen};
  cursor: pointer;

  &:hover {
    color: ${colors.darkCyan_limeGreen};
    text-decoration: underline;
  }
`;

export const ArticleDate = styled.div`
  color: ${colors.gray};
  font-size: 0.8rem;
`;

/* istanbul ignore next */
export const ArticleUserImage = styled.div`
  background-image: url(${(props) => props.ImgSrc});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  margin-right: 0.5rem;
  width: 2rem;
`;

export const ArticleTitle = styled.h1`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ArticleBody = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

export const Article = styled.div`
  border-top: 0.063rem solid ${colors.Mercury};
  flex-direction: column;
  margin: 0 5rem;
  padding: 1.5rem 0;
`;

export const ArticleDescription = styled.div`
  color: ${colors.darkGrayishBlue};
  cursor: pointer;
  margin-bottom: 0.9rem;
`;

export const ArticleReadMore = styled.div`
  color: ${colors.darkGrayishBlue};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 300;
`;

export const ArticleSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mediaQueries.mobile}) {
    flex-direction: column;
  }
`;

export const ArticleContainer = styled.div`
  margin-bottom: 3rem;
`;

export const NotFound = styled.div`
  border: none;
  color: ${colors.veryDarkGrayishBlue3};
  margin: 1rem 5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
