import React from 'react';

import '../styles/TopicListItem.scss';
import {useState} from 'react';

const TopicListItem = (props) => {

  const {id, label, link} = props;

  const topicClick = () => {
    onClick(id);
  };

  return (
    <div className="topic-list--item">
      <a href={link} onClick={topicClick}>
        <span>{props.title}</span>
      </a>
    </div>
  );
};


export default TopicListItem;