import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import FlatList from 'flatlist-react';

import './index.css';
import {DEFAULT_IMG, DEFAULT_IMG2, DEFAULT_IMG3, DEFAULT_IMG4, IC_FILTER} from "../../assets";
import SearchItem from "../../components/Search/SearchItem";
import {Select} from 'antd'
import {useAsyncFn} from "react-use";
import {getAllProduct, searchProduct} from "../../store/products/function";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const SearchPage = () => {
    const {query} = useParams()
    const [list,setList] = useState([])

    const [{loading: refreshing}, getList] = useAsyncFn( async ()=>{
        const res = await searchProduct(query);
        if (res && res.code === 1) {
            setList(res.data)
        }

    },[query,list])
    useEffect(()=>{
            getList().then()
        },
        [query])
   const renderItem = (item) => {
        return (
            <div key={item._id}>
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
                            list={list}
                            renderItem={renderItem}
                            renderWhenEmpty={() => <div>Không có kết quả</div>}

                        />
                    </div>

                </div>


            </div>
        </React.Fragment>
    );
};

export default SearchPage;
