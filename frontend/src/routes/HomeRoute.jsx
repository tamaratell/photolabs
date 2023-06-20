import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ handleOpenModal, handleFav, state }) => {

  //loading state
  if (!state.photos.length > 0) {
    return (
      <div className="loading-component">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading photos...</div>
      </div>
    );
  }

  const isFavPhotoExist = state.favPhotoIds.length > 0;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} topics={state.topics} />
      {state.photos && <PhotoList photoData={state.photos} onFavClick={handleFav} handleOpenModal={handleOpenModal} favPhotoIds={state.favPhotoIds} />}
    </div>
  );
};

export default HomeRoute;