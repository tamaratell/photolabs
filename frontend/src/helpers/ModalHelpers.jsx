import React from 'react';

import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

const createModalBannerItem = (data) => {
  return <article>
    <PhotoFavButton isFav={data.isFav} onFavClick={data.onFavClick} key={data.id} />
    <img className='photo-details-modal__image' src={data.imageSource} alt="image" />
    <div className='photo-details-modal__photographer-details'>
      <img src={data.profile} alt="user profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">{data.username}

        <p className="photo-list__user-location">
          {data.location.city}, {data.location.country}
        </p>

      </div>

    </div>
  </article>;
};



const createModalPhotoItem = (photo, onFavPhoto) => {
  return (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.full}
      username={photo.user.username}
      profile={photo.user.profile}
      onFavPhoto={onFavPhoto}
    />
  );
};


const createSuggestedList = (photos, onFavPhoto) => {
  return photos.map((photo) => {
    return createModalPhotoItem(photo, onFavPhoto);
  });
};


export { createSuggestedList, createModalPhotoItem, createModalBannerItem };