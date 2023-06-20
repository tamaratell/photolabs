import React from 'react';
import TopicListItem from '../components/TopicListItem';

const createTopicListItem = (topic, handleTopicPhotos) => {
  return (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      slug={topic.slug}
      title={topic.title}
      handleTopicPhotos={handleTopicPhotos}
    />
  );
};

const createTopicList = (topics, handleTopicPhotos) => {
  return topics.map((topic) => {
    return createTopicListItem(topic, handleTopicPhotos);
  });

};

export { createTopicList, createTopicListItem };