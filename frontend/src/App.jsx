import React from 'react';

import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';


import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';

import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = () => {
  
  
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>);
};

export default App;