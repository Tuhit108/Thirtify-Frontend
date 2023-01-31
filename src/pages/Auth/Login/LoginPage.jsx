import './LoginPage.css'
import { message } from "antd";
import React, { useState } from "react";
// import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import logoFb from '../../../assets/images/logo_facebook.svg'
import logoGg from '../../../assets/images/logo_google.svg'
import logoAp from '../../../assets/images/logo_apple.svg'
import Header from "../../../components/Header";
import {requestLogin} from "../../../store/constant/funtions";

function Login({  }) {

    const [state, _setState] = useState({});
    const setState = (data) => {
        _setState((pre) => ({ ...pre, ...data }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = state;
        setState({ clickSubmit: true });
        if (!username) {
            message.error("Vui lòng nhập SĐT");
            return;
        }
        if (!password) {
            message.error("Vui lòng nhập mật khẩu");
            return;
        }
        const res = await requestLogin({
            account: username,
            password: password
        })
        console.log("xong",res)
        if (res && res.code === 1) {

            message.success("Đăng nhập thành công");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } else {
            message.error(res.data);
        }
    };

        // _login({ username, password }).then((res) => {

        // });
    // };

    return (
        <div>
            <Header/>
            <div className="login">
                {/* <header></header> */}
                <div className="login-container">
                    <ul className="login-option">
                        <li className="login-option-home">
                            <Link to="">Đăng nhập</Link>
                            <span>{'>>'}</span>
                        </li>
                    </ul>
                    <main>
                        <div className="main-content">
                            <form className="form">
                                <div className="form-header">
                                    <div className="form-header-container">
                                        <div className="form-header-content">
                                            <h3>Đăng nhập</h3>
                                            <p>Chào bạn quay lại</p>
                                        </div>
                                        <div className="form-header-logo">
                                            <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="chotot-logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input">
                                    <div
                                        // className="form-input-phone"
                                        className={
                                            state.clickSubmit && !state.username
                                                ? "form-input-phone invalid"
                                                : "form-input-phone"
                                        }
                                    >
                                        <input
                                            type="text"
                                            className="input-phone-number"
                                            placeholder="Nhập SĐT của bạn"
                                            autocomplete="nope"
                                            onChange={(e) => {
                                                setState({ username: e.target.value });
                                            }}
                                        />
                                    </div>
                                    <p className="input-down-invisible"></p>
                                </div>
                                <div className="form-input">
                                    <div
                                        // className="form-input-phone"
                                        className={
                                            state.clickSubmit && !state.password
                                                ? "form-input-phone invalid"
                                                : "form-input-phone"
                                        }
                                    >
                                        <input
                                            type="password"
                                            className="input-phone-number"
                                            placeholder="Nhập mật khẩu của bạn"
                                            autocomplete="nope"
                                            onChange={(e) => {
                                                setState({ password: e.target.value });
                                            }}
                                        />
                                    </div>
                                    <p className="input-down-invisible"></p>
                                </div>

                                <button
                                    className="btn-login"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Đăng nhập
                                </button>
                            </form>

                            <div className="login-footer">
                                <p className="login-footer-register">Chưa có tài khoản?
                                    <Link to="/register"> Đăng ký ngay</Link>
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
