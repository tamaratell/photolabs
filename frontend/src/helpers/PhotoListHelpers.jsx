import React from 'react';
import photos from '../mocks/photos';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, onFavClick, handleOpenModal) => {
  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavClick={onFavClick}
      openModal={handleOpenModal}
      similar_photos={photo.similar_photos}
    />
  );
};

const createPhotoList = (photos, count, onFavClick, openModal) => {
  return new Array(count).fill().map((_, index) => {
    return createPhotoListItem(photos[index % photos.length], onFavClick, openModal);
  });
};

export { createPhotoList, createPhotoListItem };