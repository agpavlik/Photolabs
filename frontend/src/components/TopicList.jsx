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

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: 1,
//       label: 'Nature',
//       link: 'link placeholder'
//     },
//     {
//       id: 2,
//       label: 'Food',
//       link: 'link placeholder'
//     },
//     {
//       id: 3,
//       label: 'People',
//       link: 'link placeholder'
//     },
//   ]
// };
export default TopicList;