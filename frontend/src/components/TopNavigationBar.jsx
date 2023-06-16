import React from 'react';

import topics from '../mocks/topics';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const { isFavPhotoExist } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__menu'>
        <TopicList topicData={topics} />
        <FavBadge />
      </div>
    </div>
  );
};

export default TopNavigation;