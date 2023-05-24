import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {photos, topics} = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favorites={props.favorites} toggleFavorite={props.toggleFavorite}/>
      <PhotoList photos={props.photos} openModal={props.openModal} favorites={props.favorites} toggleFavorite={props.toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;