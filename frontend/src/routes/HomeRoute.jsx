import React from 'react';

import photos from '../mocks/photos';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList photoData={photos} />
    </div>
  );
};

export default HomeRoute;