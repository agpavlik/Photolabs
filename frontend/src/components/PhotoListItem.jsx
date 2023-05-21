
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import {useState} from 'react';


const PhotoListItem = (props, {size = 100}) => {
  
  const {username, imageSource, id, hideUserName} = props;

  const [like, setLike] = useState('off');
  const onIconClick = () => {
    props.dispatch(like === 'on' ? 'off' : 'on');
    setLike(like === 'on' ? 'off' : 'on');
  };

  return (
    <div className="photo-list--item" key={id}>
      <PhotoFavButton onIconClick={onIconClick} like = {like}/>
      <img className="photo-list--image" src={props.urls.regular} alt="image" width={size} onClick={props.openModal}/>
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={props.urls.thumb} alt="image"/>
        {!hideUserName &&
        <p className="photo-list--user-info">{props.user.name}</p>}
        <p className="photo-list--user-location">{props.location.city}, {props.location.country}</p>
      </div>
    </div>
  );
};

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// };

export default PhotoListItem;