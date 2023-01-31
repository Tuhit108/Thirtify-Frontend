import React from 'react';
import { Link } from 'react-router-dom';

import './Search.css';
import {DEFAULT_IMG4} from "../../assets";
import {formatDate} from "../../utils/formatDate";

const SearchItem = ({ product }) => {
    return (
        <React.Fragment>
                <Link to={`/product/${product._id}`} className="search-item">
                    <div className="left-search-item">
                        <div
                            className="search-item-img"
                            style={{ backgroundImage: `url(${product?.image?product?.image[0]:DEFAULT_IMG4})` }}
                            title="This is a Product image"
                        ></div>
                    </div>
                    <div className="right-search-item">
                        <div>
                            <p className="search-item-name" title={`${product?.name}`}>
                                {product?.name}
                            </p>
                            <p className="search-item-price">{product?.price}</p>
                        </div>

                        <p className="search-item-time">{formatDate(product?.createAt)}</p>
                    </div>

                </Link>
        </React.Fragment>
    );
};

export default SearchItem;
