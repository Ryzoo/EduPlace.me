import { Col, Tag } from 'antd';
import { searchSelectors } from '../../../store/features/selectors';
import { useSelector } from 'react-redux';
import React from 'react';

export const SearchTagsResult = () => {
  const tags = useSelector(searchSelectors.getSearchTagsResult);

  return tags.map((tag) => (
    <Col key={tag.name}>
      <Tag>
        <a href="#">{tag.name}</a>
      </Tag>
    </Col>
  ));
};
