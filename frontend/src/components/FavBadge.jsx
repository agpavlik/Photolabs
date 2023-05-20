import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({count, isFavPhotoExist }) => {

  //const badgeClass = count > 0 ? 'isFavPhotoExist' : 'fav-badge';

  return (
    <div className='fav-badge'>
      <FavIcon
        width={30}
        height={20}
        fill="#C80000"
        displayAlert={count}/>
    </div>
  );
};

export default FavBadge;