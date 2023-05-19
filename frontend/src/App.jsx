import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';

import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = () => {
  
  
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>);
};

export default App;