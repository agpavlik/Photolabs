import React from 'react';

import HomeRoute from "./routes/HomeRoute";

import photoData from './mocks/photos.json';
import topicData from './mocks/topics.js';

import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = () => {
  
  
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData}/>
    </div>);
};

export default App;