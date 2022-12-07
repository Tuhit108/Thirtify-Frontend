import './register.css'
import React, { useState } from "react";
import { message } from "antd";
import { Link } from 'react-router-dom'
import Login from '../login/login'

function Register({ _register, history }) {
    const [state, _setState] = useState({});
    const setState = (data) => {
        _setState((pre) => ({ ...pre, ...data }));
    };

    const handleSubmit = (e) => {
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
        _register({ username, password }).then((res) => {
            if (res && res.code === 0) {
                message.success("Đăng ký thành công. Vui lòng đăng nhập vào hệ thống");

                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000);
            } else {
                message.error(res.message);
            }
        });
    };
    return (
        <div className="register">
            {/* <header></header> */}
            <div className="register-container">
                <ul className="register-option">
                    <li className="register-option-home">
                        <Link to="/home">Trang chủ</Link>
                        <span>{'>>'}</span>
                    </li>
                    <li className="register-option-login">
                        <Link to="/login">Đăng nhập</Link>
                        <span>{'>>'}</span>
                    </li>
                    <li>
                        <p>&nbsp;Đăng ký</p>
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
                                        type="tel"
                                        className="input-phone-number"
                                        placeholder="Nhập SĐT của bạn"
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
                            <small>hoặc sử dụng</small>
                            <ul className="register-footer-icons">
                                <li src="https://static.chotot.com/storage/assets/register/facebook.svg" class="icon facebook"></li>
                                <li src="https://static.chotot.com/storage/assets/register/google.svg" class="icon google"></li>
                                <li src="https://static.chotot.com/storage/assets/register/apple.svg" class="icon apple"></li>
                            </ul>
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