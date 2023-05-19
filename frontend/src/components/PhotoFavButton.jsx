import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick = {props.handleClick}>
        <FavIcon fill = {props.like === 'on' ? "#C80000" : '#EEEEEE'} width = {22} height = {30}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;


