import React from 'react';

import '../styles/HomeRoute.scss';


import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


const HomeRoute = (props) => {
  const {photos, topics} = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics}/>
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;