import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetBooks, selectBooks } from 'src/features/book/bookSlice';

import BookList from 'src/components/Book/BookList';

import './HomeComponentsCSS/TabContents.css';

const TabContents = (props) => {
  const dispatch = useDispatch();

  //global state
  const books = useSelector(selectBooks);

  //local
  const [tab, setTab] = useState(1);
  const touchState = (index) => {
    setTab(-1);
    setTimeout(() => setTab(index), 1000);
  };

  //load book
  useEffect(() => {
    dispatch(fetchGetBooks({ limit: 12, sort: tab }));
  }, [dispatch, tab]);

  return (
    <React.Fragment>
      <div className="book-content">
        <div className="tabs">
          <div className={tab === 1 ? 'tab-item active' : 'tab-item'} onClick={() => touchState(1)}>
            Featured
          </div>
          <div className={tab === 2 ? 'tab-item active' : 'tab-item'} onClick={() => touchState(2)}>
            Hot of the week
          </div>
          <div className={tab === 3 ? 'tab-item active' : 'tab-item'} onClick={() => touchState(3)}>
            Most Rented
          </div>
          <div className="line"></div>
        </div>
      </div>

      {/* Books Tab */}
      <div className="tab-content">
        {/* Tab Sách mới */}
        <div className={tab === 1 ? 'tab-pane active' : 'tab-pane'}>
          <BookList books={books} />
        </div>

        {/* <!-- Tab Hot trong tuần --> */}
        <div className={tab === 2 ? 'tab-pane active' : 'tab-pane'}>
          <BookList books={books} />
        </div>

        {/* <!-- Tab Thuê Nhiều Nhất --> */}
        <div className={tab === 3 ? 'tab-pane active' : 'tab-pane'}>
          <BookList books={books} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabContents;
