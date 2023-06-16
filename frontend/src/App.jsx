import React from 'react';

import photos from './mocks/photos';
import topics from './mocks/topics';

import TopNavigation from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';


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