import React from 'react';

import ProductCard from './ProductCard';

const ProductList = ({ products = [] }) => {
    return (
        <React.Fragment>
            <div className="row product-list" style={{backgroundColor: 'transparent'}}>
                {products.map((product,index) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default ProductList;
