import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const { isFavPhotoExist, topics, handleTopicPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__menu'>
        <TopicList topicData={topics} handleTopicPhotos={handleTopicPhotos} />
        {isFavPhotoExist && <FavBadge isFavPhotoExist={isFavPhotoExist} />}
      </div>
    </div>
  );
};

export default TopNavigation;