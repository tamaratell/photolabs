import React from 'react';

import { createTopicList } from '../helpers/TopicListHelpers';

import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { topicData } = props;
  const topicListItems = createTopicList(topicData);

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItems}
    </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
};
export default TopicList;