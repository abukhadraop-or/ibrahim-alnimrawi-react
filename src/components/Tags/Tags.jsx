import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getTags } from 'services/fake-tags';
import { NotFound, PopTags, Tag, TagsContainer, TagsDiv } from './tags.style';

/**
 * Render a <Input> component
 *
 * @param {Object} props               The props object.
 * @param {Function} props.onTagChange Function to handle tag change.
 * @param {Boolean}  props.unClick     Boolean to check if tag clicked.
 *
 * @return {JSX.Element}
 */
const Tags = ({ onTagChange, clicked, selectedTag }) => {
  const [tags, setTags] = useState([]);

  // handle initial state.
  useEffect(() => {
    const data = async () => {
      const response = await getTags();
      const result = response.tags;
      setTags(result);
    };

    data();
  }, []);

  return (
    <TagsContainer>
      <TagsDiv>Popular Tags</TagsDiv>
      {!tags && <NotFound> No tags are here...yet</NotFound>}
      <PopTags>
        {tags.map((tag) => (
          <Tag
            selected={tag === selectedTag && !clicked}
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
  clicked: PropTypes.bool,
  selectedTag: PropTypes.string,
};

Tags.defaultProps = {
  onTagChange: () => null,
  clicked: false,
  selectedTag: '',
};
