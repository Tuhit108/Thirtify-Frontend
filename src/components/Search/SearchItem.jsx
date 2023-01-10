import React from 'react';
import { Link } from 'react-router-dom';

import './Search.css';

const SearchItem = ({ product }) => {
    return (
        <React.Fragment>
                <Link to={`/product/${product.id}`} className="search-item">
                    <div className="left-search-item">
                        <div
                            className="search-item-img"
                            style={{ backgroundImage: `url(${product.img})` }}
                            title="This is a Product image"
                        ></div>
                    </div>
                    <div className="right-search-item">
                        <div>
                            <p className="search-item-name" title={`${product.name}`}>
                                {product.name}
                            </p>
                            <p className="search-item-price">{product.price}</p>
                        </div>

                        <p className="search-item-time">{product.time}</p>
                    </div>

                </Link>
        </React.Fragment>
    );
};

export default SearchItem;
