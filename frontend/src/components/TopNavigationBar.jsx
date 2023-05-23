import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const count = props.favorites.length > 0 ? 1 : 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <FavBadge favorites={props.favorites} toggleFavorite={props.toggleFavorite} isFavPhotoExist={count}/>
    </div>
  );
};

export default TopNavigation;