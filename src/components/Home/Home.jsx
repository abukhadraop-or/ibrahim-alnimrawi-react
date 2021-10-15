import { ArticleSection } from "../Articles/articles.style";
import { Container, FeedUl, FeedLi } from "components/Home/homeStyle";
import Articles from "components/Articles/Articles";
import Banner from "components/Banner/Banner";
import React, { useState } from "react";
import Tags from "components/Tags/Tags";
const Home = () => {
  const [tag, setTag] = useState("");
  const [unClick, setUnClick] = useState(false);

  const handleTag = (tagName) => {
    if (tag === tagName) {
      setTag("");
      setUnClick(true);
    } else {
      setTag(tagName);
      setUnClick(false);
    }
  };

  return (
    <Container>
      <Banner />
      <FeedUl>
        <FeedLi>Global Feed</FeedLi>
      </FeedUl>
      <ArticleSection>
        <Articles tag={tag} />

        <Tags onTagChange={(tagName) => handleTag(tagName)} unClick={unClick} />
      </ArticleSection>
    </Container>
  );
};

export default Home;
