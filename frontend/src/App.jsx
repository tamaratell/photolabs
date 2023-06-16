import React, { useState } from 'react';

import photos from './mocks/photos';

import TopNavigation from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';


import './App.scss';


const App = () => {

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList photoData={photos} />
    </div >
  );
};

export default App;