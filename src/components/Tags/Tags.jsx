import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getTags } from 'services/fake-tags';
import { NotFound, PopTags, Tag, TagsContainer, TagsDiv } from './tags.style';

/**
 * Render a <Input> component
 *
 * @param {Object}   props             The props object.
 * @param {Function} props.onTagChange Function to handle tag change.
 * @param {String}   props.selectedTag The selected tag.
 *
 * @return {JSX.Element}
 */
const Tags = ({ onTagChange, selectedTag }) => {
  const [allTags, setAllTags] = useState([]);
  // handle initial state.
  useEffect(() => {
    const data = async () => {
      const response = await getTags();
      const result = response.tags;
      setAllTags(result);
    };

    data();
  }, []);

  return (
    <TagsContainer>
      <TagsDiv>Popular Tags</TagsDiv>
      {!allTags.length && <NotFound> No tags are here...yet</NotFound>}
      <PopTags>
        {allTags.map((tag) => (
          <Tag
            selected={tag === selectedTag}
            key={tag}
            onClick={() => {
              onTagChange(tag);
            }}
          >
            {tag}
          </Tag>
        ))}
      </PopTags>
    </TagsContainer>
  );
};
export default Tags;

Tags.propTypes = {
  onTagChange: PropTypes.func,
  selectedTag: PropTypes.string,
};

Tags.defaultProps = {
  onTagChange: null,
  selectedTag: '',
};
