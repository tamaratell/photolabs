import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const { isFavPhotoExist, topics } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__menu'>
        <TopicList topicData={topics} />
        {isFavPhotoExist && <FavBadge isFavPhotoExist={isFavPhotoExist} />}
      </div>
    </div>
  );
};

export default TopNavigation;