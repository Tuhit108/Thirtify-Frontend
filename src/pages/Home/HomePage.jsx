import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";

import './HomePage.css';
import HomeBanners from "../../components/Home/HomeBanners";
import {DEFAULT_IMG} from "../../assets";
import ProductList from "../../components/Product/ProductList";
let products = [
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

    },{
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

    },
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG

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
