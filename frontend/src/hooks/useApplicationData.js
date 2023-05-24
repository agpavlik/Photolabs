import {useReducer, useEffect} from "react";
import axios from "axios";
import photos from '../mocks/photos.json';
import topics from '../mocks/topics.json';

export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_MODAL_PHOTO_ID: "SET_MODAL_PHOTO_ID",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  MODAL_PHOTO: "MODAL_PHOTO",
  ALL_PHOTOS: "ALL_PHOTOS",
  ALL_TOPICS: "ALL_TOPICS"
};

const initialState = {
  modalPhotoId: null,
  favorites: [],
  photos: [],
  topics: [],
};


const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_MODAL_PHOTO_ID': {
    return {
      ...state,
      modalPhotoId: action.payload.modalId
    };
  }
  case 'TOGGLE_FAVORITE': {

    if (state.favorites.includes(action.payload)) {
      const newFavorites = state.favorites.filter((favorite) => (action.payload !== favorite));
      return {
        ...state,
        favorites: newFavorites
      };
    }
  }
    return {
      ... state,
      favorites: [...state.favorites, action.payload]
    };

  case "ALL_PHOTOS":
    return {
      ...state,
      photos: action.payload.photos
    };

  case "ALL_TOPICS":
    return {
      ...state,
      topics: action.payload.topics
    };



  // case 'MODAL_PHOTO': {
  //   const modalPhoto = state.photos.find((photo) => {
  //     return photo.id === action.payload;
  //   });
  //   return {
  //     ...state,
  //     modalPhoto: modalPhoto
  //   };
  // }
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO_ID, payload: {modalId: photo} });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO_ID, payload: {modalId: null} });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId});
  };

  const modalPhoto = photos.find((photo) => {
    return photo.id === state.modalPhotoId;
  });


  useEffect(() => {
    axios
      .get('/api/photos')
      .then(res => {
        dispatch({ type: ACTIONS.ALL_PHOTOS, payload: {photos:res.data}});
        console.log({photo:res.data});
      })
      .catch(e => {
        console.log("Error fetching photos:", error);
      });

    axios
      .get('/api/topics')
      .then(res => {
        dispatch({ type: ACTIONS.ALL_TOPICS, payload: {topics:res.data}});
        console.log({topics:res.data});
      })
      .catch(e => {
        console.log("Error fetching topics:", error);
      });
  }, []);


  return {
    toggleFavorite,
    openModal,
    modalPhoto,
    closeModal,
    photos,
    topics,
    state
  };
};

export default useApplicationData;