import React from 'react';
import { PhotoListItem } from '../components/PhotoListItem';

const createPhotoListItem = (photo, onFavClick, handleOpenModal, favPhotoIds) => {
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
      favPhotoIds={favPhotoIds}
      similar_photos={photo.similar_photos}
    />
  );
};

const createPhotoList = (photos, count, onFavClick, openModal, favPhotoIds) => {
  return new Array(count).fill().map((_, index) => {
    const photo = photos[index % photos.length];
    return createPhotoListItem(photo, onFavClick, openModal, favPhotoIds);
  });
};

export { createPhotoList, createPhotoListItem };