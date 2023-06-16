import React, { useState } from 'react';

import photos from '../mocks/photos';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const handleFavPhoto = (photoId) => {
    setIsFavPhotoExist(!isFavPhotoExist);
  };

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photoData={photos} onFavPhoto={handleFavPhoto} />
    </div>
  );
};

export default HomeRoute;