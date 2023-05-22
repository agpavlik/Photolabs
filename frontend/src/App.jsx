import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photoData from './mocks/photos.json';
import topicData from './mocks/topics.js';
import { useState, useReducer } from "react";
import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = () => {
  
  const [showModal, setShowModal] = useState(null);

  const openModal = (photo) => {
    setShowModal(photo);
  };
  const closeModal = () => {
    setShowModal(null);
  };


  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} openModal={openModal}/>
      <PhotoDetailsModal photos={photoData} topics={topicData} showModal={showModal} closeModal={closeModal}/>
    </div>);
};

export default App;