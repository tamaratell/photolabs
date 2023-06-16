import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal';


import './App.scss';


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
    console.log(data);
  };

  return (
    <div className="App">
      <HomeRoute handleOpenModal={handleOpenModal} />
      {isModalOpen && <PhotoDetailsModal onClose={handleCloseModal} modalData={modalData} />}
    </div >
  );
};

export default App;