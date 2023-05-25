import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  // change style of the navigation bar icon if at least one photo was marked
  const count = props.favorites.length > 0 ? 1 : 0;

  // refresh page to the start view
  const refreshWindow = () => {
    window.location.reload();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={refreshWindow}>PhotoLabs</span>
      <TopicList
        topics={props.topics}
        getPhotosByTopic={props.getPhotosByTopic}
      />
      <FavBadge
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        isFavPhotoExist={count}
      />
    </div>
  );
};

export default TopNavigation;