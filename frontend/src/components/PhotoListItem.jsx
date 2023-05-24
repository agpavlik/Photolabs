
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import {useState} from 'react';


const PhotoListItem = (props, {size = 100}) => {
  
  const {username, imageSource, id, hideUserName} = props;

  // const [like, setLike] = useState('off');
  // const onIconClick = () => {
  //   props.dispatch(like === 'on' ? 'off' : 'on');
  //   setLike(like === 'on' ? 'off' : 'on');
  // };

  const modal = () => {
    props.openModal(props.id);
  };

  return (
    <div className="photo-list--item" key={id}>
      <PhotoFavButton favorites={props.favorites} toggleFavorite={props.toggleFavorite} id={props.id}/>
      <img className="photo-list--image" src={props.urls.regular} alt="image" width={size} onClick={modal} />
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={props.urls.regular} alt="image"/>
        <div className="photo-list--user-info">
          <p>{props.user.name}</p>
          <div className="photo-list--user-location">
            <p>{props.location.city}, {props.location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;