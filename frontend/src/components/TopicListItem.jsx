import React from 'react';

import '../styles/TopicListItem.scss';
import {useState} from 'react';

const TopicListItem = (props) => {

  const {id, label, link} = props;

  return (
    <div className="topic-list--item">
      <a>
        <span>{label}</span>
      </a>
    </div>
  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder'
};
export default TopicListItem;