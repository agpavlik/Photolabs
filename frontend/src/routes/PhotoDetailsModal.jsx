import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import App from '../App';
import '../styles/PhotoDetailsModal.scss';


export const PhotoDetailsModal = (props) => {

  if (!props.showModal) {
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
      <div className="photo-details-modal--top-bar">

      </div>

      <img className="photo-details-modal--image" src={props.showModal}/>
      <div className="photo-details-modal--photographer-details">
      </div>
      <div className="photo-details-modal--header">
        <p>Related photos</p>
      </div>
      <div className='photo-details-modal--images'>
        <PhotoList photos={props.photos}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;


//src={props.showModal.urls.regular}