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
  const [clicked, setClicked] = useState(false);

  /**
   * Set the new tag name and check if the new tag is the same.
   *
   * @param {string} tagName The name of selected tag.
   */
  const onTagChange = (tagName) => {
    if (tag === tagName) {
      setTag('');
      setClicked(true);
    } else {
      setTag(tagName);
      setClicked(false);
    }
  };

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
          clicked={clicked}
          selectedTag={tag}
        />
      </MediaContainer>
    </Container>
  );
};

export default Home;
