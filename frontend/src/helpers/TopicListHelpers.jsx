import React from 'react';

import TopicList from '../components/TopicList';
import TopicListItem from '../components/TopicListItem';
import topics from '../mocks/topics';

const createTopicListItem = (topic) => {
  return (
    <TopicListItem
      key={topic.id}
      slug={topic.slug}
      label={topic.label}
    />
  );
};

const createTopicList = (topics) => {
  const count = topics.length;

  return new Array(count).fill().map((topic) => {
    return createTopicList(topics);
  });

};