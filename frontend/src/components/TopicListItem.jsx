import React from 'react';
import '../styles/TopicListItem.scss';


const TopicListItem = (props) => {

  // choose the set of photos by topic click
  const topicOnClick = () => {
    props.topicClick(props.id);
  };

  return (
    <div className="topic-list--item">
      <a href={props.link} onClick={topicOnClick}>
        <span>{props.title}</span>
      </a>
    </div>
  );
};


export default TopicListItem;