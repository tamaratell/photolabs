import React from 'react';
import photos from '../mocks/photos';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, handleLikePhoto, handleOpenModal) => {
  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavPhoto={handleLikePhoto}
      openModal={handleOpenModal}
      similar_photos={photo.similar_photos}
    />
  );
};

const createPhotoList = (photos, count, onFavPhoto, openModal) => {
  return new Array(count).fill().map((_, index) => {
    return createPhotoListItem(photos[index % photos.length], onFavPhoto, openModal);
  });
};

export { createPhotoList, createPhotoListItem };