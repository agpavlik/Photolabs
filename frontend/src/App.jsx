import React from 'react';
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';


const App = () => {
  
  const {
    state,
    openModal,
    closeModal,
    toggleFavorite,
    getPhotosByTopic
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        openModal={openModal}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
        getPhotosByTopic={getPhotosByTopic}
      />

      {state.isModalOpen && <PhotoDetailsModal
        photos={state.photos}
        topics={state.topics}
        modalPhotoId={state.modalPhotoId}
        closeModal={closeModal}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
        modalPhoto={state.modalPhotoDetails}
      />}
    </div>);
};

export default App;