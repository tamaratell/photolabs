import React, { useState } from 'react';

import photos from '../mocks/photos';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ handleOpenModal, handleFavPhoto, isFavPhotoExist }) => {


  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photoData={photos} onFavClick={handleFavPhoto} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default HomeRoute;