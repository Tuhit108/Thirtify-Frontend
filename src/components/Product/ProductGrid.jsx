import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

export default function ProductsGrid({products}) {
    return (
            <Row>
                {products.length &&
                    products.map((product) => (
                        <Col xs={6} md={3}>
                            <ProductCard key={product.id} product={product} />
                        </Col>
                    ))}
            </Row>

    );
}
