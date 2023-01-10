import React from 'react';
import { Link } from 'react-router-dom';

import './Category.css';

const CategoryItem = (category ) => {
    return (
        <React.Fragment>
            <div className="category">
                <Link to={``} className="category-item">
                    <div className="category-item-img">
                        <div
                            className="item-img"
                            style={{ backgroundImage: `url(${category.img})` }}
                            title="Category"
                        ></div>
                    </div>
                    <p className="category-item-name" title={`${category.name}`}>
                        {category.name}
                    </p>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default CategoryItem;
