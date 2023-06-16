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
      onLikePhoto={handleLikePhoto}
    />
  );
};

const createPhotoList = (photos, count) => {
  return new Array(count).fill().map((_, index) => {
    return createPhotoListItem(photos[index % photos.length]);
  });
};

export { createPhotoList, createPhotoListItem };