import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';
import {useProduct} from "../../store/products";
import {DEFAULT_IMG, DEFAULT_IMG4} from "../../assets";
import moment from 'moment'
import {formatDate} from "../../utils/formatDate";

const ProductCard = ({id}) => {
    const product = useProduct(id)
    return (
        <React.Fragment>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 product-card">
                <Link to={`/product/${product._id}`} className="card h-100 product-list-item">
                    <div className="card-img-top">
                        <div
                            className="product-item-img"
                            style={{ backgroundImage: `url(${product.image?product.image[0]:DEFAULT_IMG4})` }}
                            title="This is a Product image"
                        ></div>
                    </div>
                    <p className="product-item-name" title={`${product?.name}`}>
                        {product.name?product.name:'default'}
                    </p>
                    <p className="product-item-price">{product?.price?product?.price:'Liên hệ'}</p>
                    <p className="product-item-time">{formatDate(product?.createAt)}</p>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;
