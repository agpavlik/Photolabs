import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = ({isFavPhotoExist}) => {

  return (
    <div className='fav-badge'>
      <FavIcon
        width={30}
        height={20}
        fill="#C80000"
        displayAlert={isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;