import React from 'react';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, onFavClick, handleOpenModal, isFav) => {
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
      isFav={isFav}
      similar_photos={photo.similar_photos}
    />
  );
};

const createPhotoList = (photos, count, onFavClick, openModal, favPhotoIds) => {
  return new Array(count).fill().map((_, index) => {
    const photo = photos[index % photos.length];
    const isFav = favPhotoIds.includes(photo.id);
    return createPhotoListItem(photo, onFavClick, openModal, isFav);
  });
};

export { createPhotoList, createPhotoListItem };