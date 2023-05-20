import React from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import {useState, useReducer} from 'react';


const HomeRoute = (props) => {
  const {photos, topics} = props;

  const [state, dispatch] = useReducer((state, action) => {
    if (action === 'on') {
      return state + 1;
    } else if (action === 'off') {
      return state - 1;
    }
  }, 0
  );

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} count={state}/>
      <PhotoList photos={props.photos} dispatch={dispatch}/>
    </div>
  );
};

export default HomeRoute;