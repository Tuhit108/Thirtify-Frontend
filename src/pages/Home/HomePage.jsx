import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";

import './HomePage.css';
import HomeBanners from "../../components/Home/HomeBanners";
import {DEFAULT_IMG} from "../../assets";
import ProductList from "../../components/Product/ProductList";
import CategoryItem from "../../components/Category/CategoryItem";
let products = [
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },

]
console.log(products)

const HomePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home | Thirtify</title>
            </Helmet>
            <div id="main">
                <Header />
                <div className="content container">
                    <HomeBanners/>
                    <div className="content-header">
                        Danh mục sản phẩm
                    </div>
                    <div className="categories-list">
                        <CategoryItem img={DEFAULT_IMG} name="Xe cộ"/>
                    </div>

                    <div className="content-header">
                        Tin đăng mới
                    </div>
                    <div className="content-list">

                        <ProductList products={products}/>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default HomePage;
