import React from 'react';
import '../mocks/photos';
import '../components/PhotoListItem';

const createPhotoListItem = (photo) => {
  return (
    <article className='photo-list__item' key={photo.id}>
      <img className='photo-list__image' src={photo.urls.full} alt="image" />
      <div className='photo-list__user-details'>
        <div className="photo-list__user-info">{photo.user.username}
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
        <img src={photo.user.profile} alt="user profile" className="photo-list__user-profile" />
      </div>
    </article>
  );
};

const createPhotoList = (photos, count) => {
  return new Array(count).fill().map((_, index) => {
    return createPhotoListItem(photos[index % photos.length]);
  });
};

