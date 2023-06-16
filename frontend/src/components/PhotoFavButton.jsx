import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [fav, setFav] = useState(false);

  const clickFav = () => {
    setFav(true);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={clickFav} fill={fav ? '#C80000' : '#EEEEEE'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;