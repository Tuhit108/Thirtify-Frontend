import React from 'react';

import TabContents from './TabContents';

import './HomeComponentsCSS/HomeContent.css';

const HomeContent = () => {
  return (
    <React.Fragment>
      <div className="container content mt-5">
        <div className="books">
          {/* Content Heading */}
          <div className="content-heading">
            <h2 className="section-heading book-section">Featured Books</h2>
            <p className="section-sub-heading book-sub-heading">Search to see more books</p>
          </div>
          {/* Book Content */}
          <TabContents />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
