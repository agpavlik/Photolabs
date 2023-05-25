import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {

  // Add/remove photo id to array by icon click
  const onClick = () => {
    props.toggleFavorite(props.id);
  };

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick = {onClick}>
        <FavIcon fill = {props.favorites.includes(props.id) ? "#C80000" : '#EEEEEE'} width = {23} height = {30}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;