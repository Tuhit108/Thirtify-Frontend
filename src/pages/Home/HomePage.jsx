import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";

import './HomePage.css';
import HomeBanners from "../../components/Home/HomeBanners";
import {DEFAULT_IMG, DEFAULT_IMG2, DEFAULT_IMG3, DEFAULT_IMG4, MYPHAM_IMG, THOITRANG_IMG} from "../../assets";
import ProductList from "../../components/Product/ProductList";
import CategoryItem from "../../components/Category/CategoryItem";
import {useAsyncFn} from "react-use";
import {getAllProduct} from "../../store/products/function";
import {useProduct, useProductIds} from "../../store/products";
import {useUser} from "../../store/constant";

const HomePage = () => {
    const [page,setPage] = useState(1)
    const [data,setData] = useState({})
    const productIds = useProductIds()
    const user = JSON.parse(localStorage.getItem("user"));

    const [{loading: refreshing}, getList] = useAsyncFn( async ()=>{
        const res = await getAllProduct(page*24);
        console.log("hihi",page,res);
        console.log("user",user)

    },[page])
    useEffect(()=>{
        getList().then()
        },
        [page])

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
                    <div className="categories-list row">
                        <CategoryItem img={DEFAULT_IMG} name="Xe cộ"/>
                        <CategoryItem img={MYPHAM_IMG} name="Mỹ phẩm"/>
                        <CategoryItem img={THOITRANG_IMG} name="Thời trang"/>

                    </div>


                    <div className="content-header">
                        Tin đăng mới
                    </div>
                    <div className="content-list">

                        <ProductList products={productIds}/>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default HomePage;
