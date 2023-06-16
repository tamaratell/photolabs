import React from 'react';
import photos from './mocks/photos';
import PhotoList from './components/PhotoList';


import './App.scss';


const App = () => {

  return (
    <div className="App">
      <PhotoList photoData={photos} />
    </div >
  );
};

export default App;