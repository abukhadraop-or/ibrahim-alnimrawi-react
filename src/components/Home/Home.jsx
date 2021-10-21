import Articles from "components/Articles/Articles";
import Banner from "components/Banner/Banner";
import {
  Container,
  FeedLi,
  FeedUl,
  MediaContainer,
} from "components/Home/home.style";
import Tags from "components/Tags/Tags";
import React, { useState } from "react";
import { ArticleSection } from "../Articles/articles.style";

/**
 * Render a <Home> component
 *
 * @return {JSX.Element}
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
