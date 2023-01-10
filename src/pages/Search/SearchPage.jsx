import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import FlatList from 'flatlist-react';

import './index.css';
import {DEFAULT_IMG, DEFAULT_IMG2, DEFAULT_IMG3, DEFAULT_IMG4, IC_FILTER} from "../../assets";
import SearchItem from "../../components/Search/SearchItem";
import {Select} from 'antd'

let products = [
    {
        id : 1,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG2,
        time : "3 phút trước"

    },
    {
        id : 2,
        name : "Iphone 14pro Max",
        price : "1600000đ",
        img : DEFAULT_IMG3,
        time : "3 phút trước"

    },
    {
        id : 3,
        name : "Tivi 800 inch",
        price : "300000đ",
        img : DEFAULT_IMG4,
        time : "3 phút trước"

    },
    {
        id : 4,
        name : "G63",
        price : "2100000đ",
        img : DEFAULT_IMG,
        time : "3 phút trước"

    },
    {
        id : 5,
        name : "Gà",
        price : "200000đ",
        img : DEFAULT_IMG2,
        time : "3 phút trước"

    },
    {
        id :6,
        name : "Macbook 2080 20TBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price : "200000đ",
        img : DEFAULT_IMG3,
        time : "3 phút trước"

    },

]

const SearchPage = () => {
   const renderItem = (item) => {
        return (
            <div key={item.id}>
               <SearchItem product={item}/>
            </div>
        );
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <React.Fragment>
            <Helmet>
                <title>Search | Thirtify</title>
            </Helmet>
            <div id="main">
                <Header />
                <div className="search-content container">
                    <div className="filter">
                        <div className="filter-content">
                            <div className="filter-button">
                                <img className="filter-icon" src={IC_FILTER}/>
                                Lọc
                            </div>
                            <Select
                                className="filter-category"
                                defaultValue="all"
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'all',
                                        label: 'Tất cả danh mục',
                                    },
                                    {
                                        value: 'a',
                                        label: 'Xe cộ',
                                    },
                                    {
                                        value: 'b',
                                        label: 'Điện tử',
                                    },
                                    {
                                        value: 'c',
                                        label: 'Gia dụng',
                                    },
                                ]}
                            />
                            <Select
                                className="filter-address"
                                defaultValue="all"
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'all',
                                        label: 'Toàn quốc',
                                    },
                                    {
                                        value: 'a',
                                        label: 'Hà Giang',
                                    },
                                    {
                                        value: 'b',
                                        label: 'Yên bái',
                                    },
                                    {
                                        value: 'c',
                                        label: 'Gia dụng',
                                    },
                                ]}
                            />
                        </div>

                    </div>
                    <div className="content-header">
                        Kết quả tìm kiếm cho từ khóa:
                    </div>
                    <div className="list-item">
                        <FlatList
                            list={products}
                            renderItem={renderItem}
                            renderWhenEmpty={() => <div>List is empty!</div>}

                        />
                    </div>

                </div>


            </div>
        </React.Fragment>
    );
};

export default SearchPage;
