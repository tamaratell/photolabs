import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { id, slug, title } = props;
  return (
    <div className="topic-list__item" key={id}>
      <a href={slug}>
        <span>
          {title}
        </span>
      </a>
    </div >
  );
};

TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
};

export default TopicListItem;