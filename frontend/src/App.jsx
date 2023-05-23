import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photoData from './mocks/photos.json';
import topicData from './mocks/topics.js';
import { useState, useReducer } from "react";
import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = (props) => {

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (photoId) => {
    // console.log('toggle', photoId);
    // console.log('favorites', favorites);
    if (favorites.includes(photoId)) {
      console.log('remove');
      const newFavorites = favorites.filter((favorite) => {
        // console.log('---');
        // console.log('favorite', favorite);
        // console.log('photoId', photoId);
        // console.log('photoId === favorite', photoId === favorite);
        if (photoId === favorite) {
          // console.log('keep it');
          return false;
        } else {
          // console.log("remove it");
          return true;
        }
      });
      // console.log('setFavorites', newFavorites);
      setFavorites(newFavorites);
      return;
    }
    // console.log('add');
    setFavorites([...favorites, photoId]);
  };



  const [modalPhotoId, setModalPhotoId] = useState(null);

  const openModal = (photo) => {
    setModalPhotoId(photo);
  };
  const closeModal = () => {
    setModalPhotoId(null);
  };

  // const [state, dispatch] = useReducer((state, action) => {
  //   if (action === 'on') {
  //     return state + 1;
  //   } else if (action === 'off') {
  //     return state - 1;
  //   }
  // }, 0
  // );
  const modalPhoto = photoData.find((photo) => {
    return photo.id === modalPhotoId;
  });
  console.log('modalPhotoId', modalPhotoId);
  console.log('modalPhoto', modalPhoto);


  
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} openModal={openModal} favorites={favorites} toggleFavorite={toggleFavorite}/>
      <PhotoDetailsModal photos={photoData} topics={topicData} modalPhotoId={modalPhotoId} closeModal={closeModal} favorites={favorites} toggleFavorite={toggleFavorite} modalPhoto={modalPhoto}/>
    </div>);
};

export default App;