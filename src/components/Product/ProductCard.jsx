import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <React.Fragment>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 ">
                <Link to={`/product/${product.id}`} className="card h-100 product-list-item">
                    <div className="card-img-top">
                        <div
                            className="product-item-img"
                            style={{ backgroundImage: `url(${product.img})` }}
                            title="This is a Product image"
                        ></div>
                    </div>
                    <p className="product-item-name" title={`${product.name}`}>
                        {product.name}
                    </p>
                    <p className="product-item-author">{product.price}</p>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;
