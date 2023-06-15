
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <article className='photo-list__item' key={id}>

      <img className='photo-list__image' src={imageSource} alt="image" />

      <div className='photo-list__user-details'>

        <div className="photo-list__user-info">{username}

          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>

        </div>

        <img src={profile} alt="user profile" className="photo-list__user-profile" />
      </div>

    </article>
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