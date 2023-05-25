import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {

  const parsedPhotos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        {... photo}
        key={photo.id}
        openModal={props.openModal}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        topics={props.topics}
        photos={props.similar_photos}
      />
    );
  });

  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );
};

export default PhotoList;