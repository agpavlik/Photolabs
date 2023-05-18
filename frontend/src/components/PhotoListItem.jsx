
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import {useState} from 'react';


const PhotoListItem = (props, {size = 100}) => {
  
  const {username, imageSource, id, hideUserName} = props;

  const [like, setLike] = useState('off');
  const handleClick = () => setLike(like === 'on' ? 'off' : 'on');

  return (
    <div className="photo-list--item" key={id}>
      <PhotoFavButton handleClick = {handleClick} like = {like}/>
      <img src={imageSource} alt="image" width={size} className="photo-list--image"/>
      {!hideUserName && <p className="photo-list--user-info">{username}</p>}
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;