import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import App from '../App';
import '../styles/PhotoDetailsModal.scss';


export const PhotoDetailsModal = (props) => {

  if (!props.modalPhotoId) {
    return null;
  }

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={props.closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--top-icon">
        <PhotoFavButton toggleFavorite={props.toggleFavorite} favorites = {props.favorites} id={props.modalPhotoId}/>
      </div>
      <img className="photo-details-modal--image" src={props.modalPhoto.urls.full}/>
      <div className="photo-details-modal--user-details">
        <img className="photo-details-modal--user-profile" src={props.modalPhoto.user.profile} alt="image"/>
        <div className="photo-details-modal--user-info">
          <p>{props.modalPhoto.user.name}</p>
          <div className="photo-details-modal--user-location">
            <p>{props.modalPhoto.location.city} {props.modalPhoto.location.country}</p>
          </div>
        </div>
      </div>
      <div className="photo-details-modal--header">
        <p>Related photos</p>
      </div>
      <div className='photo-details-modal--images'>
        <PhotoList photos={props.photos} favorites={props.favorites} toggleFavorite={props.toggleFavorite}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
