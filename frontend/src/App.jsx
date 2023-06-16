import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


import './App.scss';


const App = () => {

  return (
    <div className="App">
      <HomeRoute />
      <PhotoDetailsModal />
    </div >
  );
};

export default App;