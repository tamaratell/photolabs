import React, { useState } from 'react';

import photos from '../mocks/photos';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ handleOpenModal, handleFav, state }) => {

  const isFavPhotoExist = state.favPhotoIds.length > 0;


  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photoData={photos} onFavClick={handleFav} handleOpenModal={handleOpenModal} isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default HomeRoute;