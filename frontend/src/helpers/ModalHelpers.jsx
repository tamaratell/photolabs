import React, { useState } from 'react';

import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';


const createModalBannerItem = (data, favPhotoIds, handleFav) => {

  const handleFavClick = () => {
    handleFav(data.id);
  };

  return <article id={data.id} key={data.id}>
    < PhotoFavButton onFavClick={handleFavClick} favPhotoIds={favPhotoIds} id={data.id} />
    <img className='photo-details-modal__image' src={data.imageSource} alt="image" />
    <div className='photo-details-modal__photographer-details'>
      <img src={data.profile} alt="user profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">{data.username}

        <p className="photo-list__user-location">
          {data.location.city}, {data.location.country}
        </p>

      </div>

    </div>
  </article >;
};


const createModalPhotoItem = (photo, handleFav, handleOpenModal, favPhotoIds) => {

  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavClick={handleFav}
      openModal={handleOpenModal}
      favPhotoIds={favPhotoIds}
      similar_photos={photo.similar_photos}
    />
  );
};


const createSuggestedList = (photos, handleFav, handleOpenModal, favPhotoIds) => {
  return Object.values(photos).map((photo) => {
    return createModalPhotoItem(photo, handleFav, handleOpenModal, favPhotoIds);
  });
};


export { createSuggestedList, createModalPhotoItem, createModalBannerItem };