import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal';


import './App.scss';


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <HomeRoute handleOpenModal={handleOpenModal} />
      {isModalOpen && <PhotoDetailsModal onClose={handleCloseModal} />}
    </div >
  );
};

export default App;