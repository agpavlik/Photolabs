import React from 'react';
import useApplicationData from "./hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single co mponent to build components in isolation
const App = (props) => {
  
  const {
    photos,
    topics,
    state,
    openModal,
    closeModal,
    toggleFavorite,
    modalPhoto,
  } = useApplicationData();



  // const [favorites, setFavorites] = useState([]);
  // const toggleFavorite = (photoId) => {
  //   if (favorites.includes(photoId)) {
  //     console.log('remove');
  //     const newFavorites = favorites.filter((favorite) => {
  //       if (photoId === favorite) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //     setFavorites(newFavorites);
  //     return;
  //   }
  //   setFavorites([...favorites, photoId]);
  // };

  // const [modalPhotoId, setModalPhotoId] = useState(null);

  // const openModal = (photo) => {
  //   setModalPhotoId(photo);
  // };
  // const closeModal = () => {
  //   setModalPhotoId(null);
  // };

  // const modalPhoto = photos.find((photo) => {
  //   return photo.id === modalPhotoId;
  // });



 console.log(state)
  
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
      />
      <PhotoDetailsModal
        photos={photos}
        topics={topics}
        modalPhotoId={state.modalPhotoId}
        closeModal={closeModal}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
        modalPhoto={modalPhoto}
      />
    </div>);
};

export default App;