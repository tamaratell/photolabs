import React from 'react';
import useApplicationData from '../hooks/useApplicationData';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { onFavClick, id } = props;
  const { state } = useApplicationData();

  const isFav = state.favPhotoIds.includes(id);

  return (
    <div onClick={onFavClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav ? '#C80000' : '#FFFFFF'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

