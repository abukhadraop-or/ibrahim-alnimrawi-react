import { ArticleSection } from "../Articles/articles.style";
import {
  Container,
  FeedUl,
  FeedLi,
  MediaContainer,
} from "components/Home/homeStyle";
import Articles from "components/Articles/Articles";
import Banner from "components/Banner/Banner";
import React, { useState } from "react";
import Tags from "components/Tags/Tags";

/**
 * Render a <Home> component
 */
const Home = () => {
  const [tag, setTag] = useState("");
  const [unClick, setUnClick] = useState(false);

  /**
   *Set the new tag name and check if the new tag is the same.
   *
   * @param {string} tagName The name of selected tag.
   */
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
      <MediaContainer>
        <div>
          <FeedUl>
            <FeedLi>Global Feed</FeedLi>
          </FeedUl>
          <ArticleSection>
            <Articles tag={tag} />
          </ArticleSection>
        </div>
        <Tags onTagChange={(tagName) => handleTag(tagName)} unClick={unClick} />
      </MediaContainer>
    </Container>
  );
};

export default Home;
