import React, { useState } from 'react';

import photos from '../mocks/photos';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [favPhotoIds, setFavPhotoIds] = useState([]);

  const handleFavPhoto = (photoId) => {
    setFavPhotoIds((prevIds) => [...prevIds, photoId]);
  };

  console.log(favPhotoIds);

  const isFavPhotoExist = favPhotoIds.length > 0;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photoData={photos} onFavPhoto={handleFavPhoto} />
    </div>
  );
};

export default HomeRoute;