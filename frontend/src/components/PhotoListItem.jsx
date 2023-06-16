import React, { useState } from 'react';

import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, onFavPhoto, openModal, similar_photos } = props;

  const [isFav, setFav] = useState(false);

  const handleFavClick = () => {
    setFav(!isFav);
    onFavPhoto(id);
  };

  const handleImageClick = () => {
    openModal({ id, location, imageSource, username, profile, onFavPhoto, similar_photos, handleFavClick, isFav, setFav, PhotoFavButton, openModal });
  };

  return (
    <li className='photo-list__item' key={id}>
      <article>
        <PhotoFavButton isFav={isFav} onFavClick={handleFavClick} key={id} />
        <img className='photo-list__image' src={imageSource} alt="image" onClick={handleImageClick} />

        <div className='photo-list__user-details'>

          <div className="photo-list__user-info">{username}

            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>

          </div>

          <img src={profile} alt="user profile" className="photo-list__user-profile" />
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