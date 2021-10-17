import { getTags } from "../../services/fakeTags";
import { TagsDiv, Tag, TagsContainer, PopTags, NotFound } from "./tags.style";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

/**
 * Render a <Input> component
 *
 * @param {Function} props.onTagChange Function to handle tag change.
 * @param {Boolean} props.unClick      Boolean to check if tag un clicked.
 */
const Tags = ({ onTagChange, unClick }) => {
  const [tags, setTags] = useState([]);
  const [select, setSelect] = useState("");
  useEffect(() => {
    const data = async () => {
      let response = await getTags();
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
            selected={select === tag && !unClick}
            key={tag}
            onClick={() => {
              onTagChange(tag);
              setSelect(tag);
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
  unClick: PropTypes.bool,
};
