import React from 'react';

import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, onFavClick, openModal, similar_photos, favPhotoIds } = props;

  const handleFavClick = () => {
    onFavClick(id);
  };

  const handleImageClick = () => {
    openModal({ id, location, imageSource, username, profile, similar_photos }
    );
  };

  return (
    <li className='photo-list__item' key={id} id={id}>
      <article>
        <PhotoFavButton onFavClick={handleFavClick} id={id} favPhotoIds={favPhotoIds} />
        <img className='photo-list__image' src={imageSource} alt="image" onClick={handleImageClick} />
        <div className='photo-list__user-details'>
          <img src={profile} alt="user profile" className="photo-list__user-profile" />

          <div className="photo-list__user-info">{username}

            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>

          </div>

        </div>

      </article>
    </li>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;
export { PhotoListItem }; 