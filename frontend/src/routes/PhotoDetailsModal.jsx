import React, { Profiler } from 'react';
import { createSuggestedList, createModalBannerItem } from '../helpers/ModalHelpers';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoList.scss';
import('../styles/PhotoFavButton.scss');

const PhotoDetailsModal = ({ onClose, modalData }) => {

  console.log("mdl", { modalData });

  const handleCloseButton = () => {
    onClose();
  };

  const bannerPhotoData = {
    profile: modalData.profile,
    imageSource: modalData.imageSource,
    username: modalData.username,
    id: modalData.id,
    location: modalData.location,
    onFavClick: modalData.onFavClick,
    handleFavClick: modalData.handleFavClick
  };

  console.log("bpd", bannerPhotoData);



  const bannerPhotoItem = createModalBannerItem(bannerPhotoData);
  const similarPhotoData = Object.values(modalData.similar_photos);
  const similarPhotoList = createSuggestedList(similarPhotoData, modalData.onFavClick);




  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={handleCloseButton}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__top-bar'>
        <ul className='modal__image' id='modal_banner'>
          {bannerPhotoItem}
        </ul>
      </div>
      <div className='photo-details-modal__images'>
        <header className='photo-details-modal__header'>
          Similar Photos
        </header>
        <ul className='photo-list'>
          {similarPhotoList}
        </ul>
      </div>
    </div>
  );
};

export { PhotoDetailsModal };
