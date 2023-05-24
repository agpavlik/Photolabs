import React from 'react';

import TopicListItem from "./TopicListItem";
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const {topics} = props;
  const parsedTopics = props.topics.map((topic) => {
    return <TopicListItem {... topic} key={topic.id}/>;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {parsedTopics}
    </div>
  );
};

export default TopicList;