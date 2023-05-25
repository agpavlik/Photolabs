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
  ALL_TOPICS: "ALL_TOPICS",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC"
};

const initialState = {
  modalPhotoId: null,
  favorites: [],
  photos: [],
  topics: [],
  isModalOpen: false,
  modalPhotoDetails: null,
};

const modalPhoto = (photos, photoId) => {
  const modalWindow = photos.find(item => item.id === photoId);
  return modalWindow;
};


const reducer = (state, action) => {
  switch (action.type) {
  case "SET_MODAL_PHOTO_ID": {
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
      modalPhotoId: action.payload.modalId,
      modalPhotoDetails: action.payload.modalId !== null ? modalPhoto(state.photos, action.payload.modalId) : null
    };
  }
  case "TOGGLE_FAVORITE": {
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
    console.log('all the photots', action.payload.photos);
    return {
      ...state,
      photos: action.payload.photos
    };

  case "ALL_TOPICS":
    console.log('all the topics', action.payload.topics);
    return {
      ...state,
      topics: action.payload.topics
    };
  
  case "GET_PHOTOS_BY_TOPIC":
    return {
      ...state,
      photos: action.payload.photos
    };

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

  const getPhotosByTopic = (topicId) => {
    console.log('topicId', topicId);
    axios
      .get(`/api/topics/photos/${topicId}`)
      .then(res => {
        console.log('res', res);
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: {photos:res.data}});
      })
      .catch(e => {
        console.log("Error fetching photos by topic:", e);
      });
  };


  useEffect(() => {
    axios
      .get('/api/photos')
      .then(res => {
        dispatch({ type: ACTIONS.ALL_PHOTOS, payload: {photos:res.data}});
      })
      .catch(e => {
        console.log("Error fetching photos:", e);
      });

    axios
      .get('/api/topics')
      .then(res => {
        dispatch({ type: ACTIONS.ALL_TOPICS, payload: {topics:res.data}});
      })
      .catch(e => {
        console.log("Error fetching topics:", e);
      });
  }, []);


  return {
    getPhotosByTopic,
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