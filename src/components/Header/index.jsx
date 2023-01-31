import React, {useCallback, useState} from 'react';

import './Header.css';

import {IC_BAG, IC_DEFAULT, IC_HOME, IC_NOTIFICATION, IC_SEARCH} from "../../assets";
import {Link} from "react-router-dom";
import {message} from "antd";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [text, setText] = useState("")
    const onSearch = useCallback((e)=>{
        e.preventDefault();
        console.log("text",text)
        if(text){
            setTimeout(() => {
                window.location.href = `/search/${text}`;
            }, 1000);
        }
        else message.error("Vui lòng nhập từ khóa")
    },[text])


    return (<React.Fragment>
            <div className="header">
                <div className="header-section1">
                    <div className="nav-header">
                        <div className="logo">
                            <Link to="/">
                                ThirtifyShop
                            </Link>
                        </div>
                        <div className="navBar">
                            <div className="nav-item">
                                <Link to="/" className="nav-item-child">
                                    <img className="nav-header-icon" src={IC_HOME}/>
                                    <span>Trang chủ</span>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/" className="nav-item-child">
                                    <img className="nav-header-icon" src={IC_BAG}/>
                                    <span>Đơn hàng</span>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/" className="nav-item-child">
                                    <img className="nav-header-icon" src={IC_NOTIFICATION}/>
                                    <span>Thông báo</span>
                                </Link>
                            </div>
                            <div className="nav-item">
                                {user ? (<Link to="/" className="auth-item-child">
                                    <img className="auth-icon" src={IC_DEFAULT}/>
                                    <span> {user?.fullName ? user?.fullName : 'Xin chào'}</span>
                                </Link>) : (<Link to="/login" className="auth-item-child">
                                    <img className="auth-icon" src={IC_DEFAULT}/>
                                    <span>Đăng nhập</span>
                                </Link>)}


                            </div>

                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    <div className="nav-header">
                        <div className="search-view">
                            <input className="search-input" autoComplete="off" placeholder="Tìm kiếm "
                                   type="text"
                                   onChange={(e) => {
                                       setText(e.target.value);
                                   }}/>
                            <button aria-label="Search Button Desktop" className="search-button" onClick={onSearch}>
                                <img src={IC_SEARCH} className="search-icon"/>
                            </button>
                        </div>
                        <button className="post-button">ĐĂNG TIN</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default Header;
