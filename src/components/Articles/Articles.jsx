import LikeButton from "components/Shared/LikeButton/LikeButton";
import Pagination from "../Shared/Pagination/Pagination";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  getArticlesNumber,
  paginateSlice,
} from "../../services/fakeArticlesService";
import {
  ArticleHeader,
  ArticleUser,
  ArticleDate,
  ArticleSubContainer,
  ArticleUserImage,
  Article,
  ArticleTitle,
  ArticleDescription,
  ArticleReadMore,
  ArticleContainer,
  NotFound,
  Container,
} from "./articles.style";

const handleDate = (originalDate) => {
  const date = new Date(Date.parse(originalDate));
  return date.toDateString();
};

const Articles = ({ tag }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfArticles, setNumberOfArticles] = useState(0);
  const handlePageChange = (page) => {
    setPage(page);
    setArticles(paginateSlice(page, 10));
  };

  useEffect(() => {
    const data = async () => {
      let response = await paginateSlice(tag, page, 10);
      setArticles(response);
      setNumberOfArticles(getArticlesNumber);
    };

    data();
  }, [page, tag]);

  useEffect(() => {
    if (!!tag) {
      const data = paginateSlice(tag, page, 10);
      setNumberOfArticles(data[0].length);

      setArticles(data[0]);
    }
  }, [tag, numberOfArticles, page]);
  return (
    <Container>
      {!numberOfArticles && <NotFound>No articles are here... yet.</NotFound>}
      {!!numberOfArticles && (
        <Article>
          {articles.length > 0 &&
            articles.map((article) => (
              <ArticleContainer key={article.slug}>
                <ArticleHeader>
                  <ArticleUserImage ImgSrc={article?.author?.image} />
                  <ArticleSubContainer>
                    <ArticleUser>{article?.author?.username}</ArticleUser>
                    <ArticleDate>{handleDate(article?.createdAt)}</ArticleDate>
                  </ArticleSubContainer>
                  <LikeButton count={article?.favoritesCount}></LikeButton>
                </ArticleHeader>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleReadMore>Read more...</ArticleReadMore>
              </ArticleContainer>
            ))}
        </Article>
      )}

      <Pagination
        onPageChange={handlePageChange}
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
