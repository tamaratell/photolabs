import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { onFavClick, isFav } = props;

  return (
    <div onClick={onFavClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav ? '#C80000' : '#FFFFFF'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

