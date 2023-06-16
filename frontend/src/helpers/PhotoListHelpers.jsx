import React from 'react';
import photos from '../mocks/photos';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, handleLikePhoto) => {
  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavPhoto={handleLikePhoto}
    />
  );
};

const createPhotoList = (photos, count, onFavPhoto) => {
  return new Array(count).fill().map((_, index) => {
    return createPhotoListItem(photos[index % photos.length], onFavPhoto);
  });
};

export { createPhotoList, createPhotoListItem };