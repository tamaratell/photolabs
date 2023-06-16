import React, { useState } from 'react';

import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';


const createModalBannerItem = (data) => {

  const [isFav, setIsFav] = useState(false);

  const handleFavClick = (id) => {
    data.onFavClick(data.id);
    setIsFav(true);
  };

  return <article id={data.id} key={data.id}>
    < PhotoFavButton onFavClick={handleFavClick} isFav={isFav} />
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


const createModalPhotoItem = (photo, onFavClick, handleOpenModal, isFav) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleFavClick = (id) => {
    onFavClick(id);
    setIsLiked(true);
  };


  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavClick={handleFavClick}
      openModal={handleOpenModal}
      isFav={isLiked}
      similar_photos={photo.similar_photos}
    />
  );
};


const createSuggestedList = (photos, onFavClick, openModal, favPhotoIds) => {
  return Object.values(photos).map((photo) => {
    return createModalPhotoItem(photo, onFavClick, openModal, favPhotoIds);
  });
};


export { createSuggestedList, createModalPhotoItem, createModalBannerItem };