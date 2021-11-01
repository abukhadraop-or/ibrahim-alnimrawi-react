import Articles from 'components/Articles/Articles';
import Banner from 'components/Banner/Banner';
import {
  Container,
  FeedLi,
  FeedUl,
  MediaContainer,
  SubContainer,
} from 'components/Home/home.style';
import Tags from 'components/Tags/Tags';
import React, { useState } from 'react';

/**
 * Render a <Home> component
 *
 * @return {JSX.Element}
 */
const Home = () => {
  const [tag, setTag] = useState('');

  /**
   * Set the new tag name and check if the new tag is the same.
   *
   * @param {string} tagName The name of selected tag.
   *
   * @returns {Boolean} Boolean to check if new tag selected.
   */
  const onTagChange = (tagName) =>
    tag === tagName ? setTag('') : setTag(tagName);
<<<<<<< HEAD
=======

>>>>>>> 4c1fa34cad8f09284c8311f27546f0dc31e8c4f6
  return (
    <Container>
      <Banner />
      <MediaContainer>
        <SubContainer>
          <FeedUl>
            <FeedLi>Global Feed</FeedLi>
          </FeedUl>
          <Articles tag={tag} />
        </SubContainer>
        <Tags
          onTagChange={(tagName) => onTagChange(tagName)}
          selectedTag={tag}
        />
      </MediaContainer>
    </Container>
  );
};

export default Home;
