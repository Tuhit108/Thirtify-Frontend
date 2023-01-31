import './RegisterPage.css'
import React, { useState } from "react";
import { message } from "antd";
import { Link } from 'react-router-dom'
import Header from "../../../components/Header";
import {requestLogin, requestRegister} from "../../../store/constant/funtions";

function Register({ _register, history }) {
    const [state, _setState] = useState({});
    const setState = (data) => {
        _setState((pre) => ({ ...pre, ...data }));
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const { username, password,phone,email } = state;
        setState({ clickSubmit: true });
        if (!username) {
            message.error("Vui lòng nhập username");
            return;
        }
        if (!password) {
            message.error("Vui lòng nhập mật khẩu");
            return;
        }
        if (!phone) {
            message.error("Vui lòng nhập sđt");
            return;
        }
        if (!email) {
            message.error("Vui lòng nhập email");
            return;
        }

        const res = await requestRegister({
            email: email,
            password: password,
            fullName : username,
            phone : phone
        })
        console.log("xong",res)
        if (res && res.code === 1) {

            message.success("Đăng ký thành công, đăng nhập tài khoản của bạn");
            setTimeout(() => {
                window.location.href = "/login";
            }, 1000);
        } else {
            message.error(res.data);
        }
    };
    return (
        <div className="register">
            {/* <header></header> */}
            <Header/>
            <div className="register-container">
                <ul className="register-option">
                    <li className="register-option-home">
                        <Link to="/home">Đăng ký</Link>
                        <span>{'>>'}</span>
                    </li>
                </ul>
                <main>
                    <div className="main-content">
                        <form className="form">
                            <div className="form-header">
                                <div className="form-header-container">
                                    <div className="form-header-content">
                                        <h3>Đăng ký</h3>
                                        <p>Tạo tài khoản ngay</p>
                                    </div>
                                    <div className="form-header-logo">
                                        <img src="https://static.chotot.com/storage/assets/LOGIN/logo_register.png" alt="chotot-logo" />
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
                                        placeholder="Tên đăng nhập của bạn"
                                        autocomplete="nope"
                                        required=""
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
                                        placeholder="Tạo một mật khẩu có ít nhất 5 ký tự"
                                        autocomplete="nope"
                                        required=""
                                        onChange={(e) => {
                                            setState({ password: e.target.value });
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
                                        type="tel"
                                        className="input-phone-number"
                                        placeholder="Nhập số điện thoại"
                                        autoComplete="nope"
                                        required=""
                                        onChange={(e) => {
                                            setState({phone: e.target.value});
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
                                        type="text"
                                        className="input-phone-number"
                                        placeholder="Nhập email của bạn"
                                        autoComplete="nope"
                                        required=""
                                        onChange={(e) => {
                                            setState({email: e.target.value});
                                        }}

                                    />
                                </div>
                                <p className="input-down-invisible"></p>
                            </div>


                            <button
                                className="btn-register"
                                type="submit"
                                onClick={handleSubmit}
                            >Đăng ký
                            </button>
                        </form>

                        <div className="register-footer">
                            <p className="register-footer-rules">
                                Bằng việc Đăng ký, bạn đã đồng ý với&nbsp;
                                <a href="https://trogiup.chotot.com/nguoi-ban/hoat-dong/" target="_blank" rel="noreferrer">Điều khoản sử dụng </a>
                                của ThirtiFy
                            </p>
                            {/*<small>hoặc sử dụng</small>*/}
                            {/*<ul className="register-footer-icons">*/}
                            {/*    <li src="https://static.chotot.com/storage/assets/register/facebook.svg" class="icon facebook"></li>*/}
                            {/*    <li src="https://static.chotot.com/storage/assets/register/google.svg" class="icon google"></li>*/}
                            {/*    <li src="https://static.chotot.com/storage/assets/register/apple.svg" class="icon apple"></li>*/}
                            {/*</ul>*/}
                            <p className="register-footer-register">Bạn đã có tài khoản?
                                <Link to="/login"> Đăng nhập</Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Register;
