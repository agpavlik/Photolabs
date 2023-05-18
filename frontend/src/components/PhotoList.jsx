import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const {photos} = props;
  const parsedPhotos = Array.isArray(photos) && props.photos.map((photo) => {
    return <PhotoListItem {... photos} key={photos.id}/>;
  });


  return (
    <ul className="photo-list">
      <li>
        {parsedPhotos}</li>
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    }
  ]
};

export default PhotoList;