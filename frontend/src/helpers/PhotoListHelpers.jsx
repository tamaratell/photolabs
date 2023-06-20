import React from 'react';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, onFavClick, handleOpenModal, isFavPhotoExist) => {
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
      isFavPhotoExist={isFavPhotoExist}
      similar_photos={photo.similar_photos}
    />
  );
};

const createPhotoList = (photos, count, onFavClick, openModal, isFavPhotoExist) => {
  return new Array(count).fill().map((_, index) => {
    const photo = photos[index % photos.length];
    return createPhotoListItem(photo, onFavClick, openModal, isFavPhotoExist);
  });
};

export { createPhotoList, createPhotoListItem };