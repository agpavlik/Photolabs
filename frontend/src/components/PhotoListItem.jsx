
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props, {size = 100}) => {

  // Open modal by photo click
  const modalOnClick = () => {
    props.openModal(props.id);
  };

  return (
    <div className="photo-list--item" key={props.id}>
      <PhotoFavButton favorites={props.favorites} toggleFavorite={props.toggleFavorite} id={props.id}/>
      <img className="photo-list--image" src={props.urls.regular} alt="image" width={size} onClick={modalOnClick} />
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={props.user.profile} alt="image"/>
        <div className="photo-list--user-info">
          <p>{props.user.name}</p>
          <div className="photo-list--user-location">
            <p>{props.location.city} {props.location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;