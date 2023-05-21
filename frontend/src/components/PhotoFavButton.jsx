import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick = {props.onIconClick}>
        <FavIcon fill = {props.like === 'on' ? "#C80000" : '#EEEEEE'} width = {23} height = {30}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;