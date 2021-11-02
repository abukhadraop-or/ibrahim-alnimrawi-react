import LikeButton from 'components/shared/LikeButton/LikeButton';
import Pagination from 'components/shared/Pagination/Pagination';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getArticles } from 'services/fake-articles-service';
import { formatDate } from 'utils/format-date';
import {
  Article,
  ArticleContainer,
  ArticleDate,
  ArticleDescription,
  ArticleHeader,
  ArticleReadMore,
  ArticleSubContainer,
  ArticleTitle,
  ArticleUser,
  ArticleUserImage,
  Container,
  NotFound,
} from './articles.style';

/**
 * Render a <Articles> component
 *
 * @param {Object} props     The props object.
 * @param {String} props.tag The name of the current tag.
 *
 * @return {JSX.Element}
 */
const Articles = ({ tag }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfArticles, setNumberOfArticles] = useState(0);

  /**
   * Set the page to the selected page.
   *
   * @param {Number} selectedPage The number of selected page.
   */
  const onPageChange = (selectedPage) => setPage(selectedPage);

  // handle initial state.
  useEffect(() => {
    const data = async () => {
      const response = await getArticles(tag, page, 10);
      setArticles(response.articles);
      setNumberOfArticles(response.articlesCount);
    };
    data();
  }, [page]);

  // handle filtering.
  useEffect(() => {
    setPage(1);
    const data = async () => {
      const response = await getArticles(tag, page, 10);
      setArticles(response.articles);
      setNumberOfArticles(response.articlesCount);
    };
    data();
  }, [tag]);

  return (
    <Container>
      {!numberOfArticles && <NotFound>No articles are here... yet.</NotFound>}
      {!!numberOfArticles && (
        <Article>
          {numberOfArticles > 0 &&
            articles.map((article) => (
              <ArticleContainer key={article.slug}>
                <ArticleHeader>
                  <ArticleUserImage ImgSrc={article.author.image} />
                  <ArticleSubContainer>
                    <ArticleUser>{article.author.username}</ArticleUser>
                    <ArticleDate>{formatDate(article.createdAt)}</ArticleDate>
                  </ArticleSubContainer>
                  <LikeButton count={article.favoritesCount} />
                </ArticleHeader>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleReadMore>Read more...</ArticleReadMore>
              </ArticleContainer>
            ))}
        </Article>
      )}

      <Pagination
        onPageChange={onPageChange}
        currentPage={page}
        pageSize={10}
        itemsCount={numberOfArticles}
      />
    </Container>
  );
};

export default Articles;

Articles.propTypes = {
  tag: PropTypes.string,
};

Articles.defaultProps = {
  tag: '',
};
