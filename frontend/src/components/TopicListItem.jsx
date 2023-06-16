import React from 'react';

import '../styles/TopicListItem';

const TopicListItem = (props) => {
  const { id, slug, label } = props;
  return (
    <div className="topic-list__item" key={id}>
      <a href={slug}>
        <span>
          {label}
        </span>
      </a>
    </div >
  );
};

TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
};
export default TopicListItem;