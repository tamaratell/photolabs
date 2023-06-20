import React from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal';


import './App.scss';


const App = () => {

  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute handleOpenModal={setPhotoSelected} handleFav={updateToFavPhotoIds} state={state} />
      {state.selectedPhoto && <PhotoDetailsModal onClose={onClosePhotoDetailsModal} state={state} handleFav={updateToFavPhotoIds} />}
    </div >
  );
};

export default App;