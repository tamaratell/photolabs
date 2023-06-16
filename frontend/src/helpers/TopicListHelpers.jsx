import React from 'react';
import TopicListItem from '../components/TopicListItem';

const createTopicListItem = (topic) => {
  return (
    <TopicListItem
      key={topic.id}
      slug={topic.slug}
      title={topic.title}
    />
  );
};

const createTopicList = (topics) => {
  return topics.map((topic) => {
    return createTopicListItem(topic);
  });

};

export { createTopicList, createTopicListItem };