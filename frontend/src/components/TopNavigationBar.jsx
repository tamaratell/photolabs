import React from 'react';

import topics from '../mocks/topics';

import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topics} />
    </div>
  );
};

export default TopNavigation;