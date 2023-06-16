import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal';


import './App.scss';


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [favPhotoIds, setFavPhotoIds] = useState([]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };


  const handleFavPhoto = (photoId) => {
    if (favPhotoIds.includes(photoId)) {
      return setFavPhotoIds((prevIds) => prevIds.filter((id) => id !== photoId));
    }
    setFavPhotoIds((prevIds) => [...prevIds, photoId]);

  };

  const isFavPhotoExist = favPhotoIds.length > 0;

  return (
    <div className="App">
      <HomeRoute handleOpenModal={handleOpenModal} handleFavPhoto={handleFavPhoto} isFavPhotoExist={isFavPhotoExist} />
      {isModalOpen && <PhotoDetailsModal onClose={handleCloseModal} modalData={modalData} onFavClick={handleFavPhoto} isFavPhotoExist={isFavPhotoExist} />}
    </div >
  );
};

export default App;