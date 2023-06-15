import React from 'react';
import photos from './mocks/photos';
import { createPhotoList } from './helpers/PhotoListHelpers';


import './App.scss';


const App = () => {
  const photoList = createPhotoList(photos, 9);

  return (
    <div className="App">
      {photoList}
    </div>
  );
};

export default App;