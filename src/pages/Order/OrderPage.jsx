import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import './OrderPage.css'
import {DEFAULT_IMG4, IC_BILL} from "../../assets";
import {Link, useParams} from "react-router-dom";
import {useProduct} from "../../store/products";
import {createOrder} from "../../store/order/function";
import {message} from "antd";
const OrderPage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const {productId} = useParams()
    const product = useProduct(productId)
    const [params,setParams] = useState({
        phone : user?.phoneNumber,
        address :user?.fullName +" | "+ user?.address,
    } )
    const handleOrder = async ()=>{
       const res = await createOrder({
            name : product?.name,
            address : params?.address,
            phoneNumber : params?.phone,
            productId : productId,
            price :parseInt(product?.price.replace(/đ/g, ""))*1000 ,
            paymentMethod : "Tự thỏa thuận",
            deliveryMethod : "Tự thỏa thuận chi phí giao hàng",
            status : "0",
            buyerId : user._id,
            shopId : product?.shopId
        })
        console.log("res",res)
        if (res && res.code === 1) {
            message.success("Đặt hàng thành công");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        }
        else  message.error("Đặt hàng không thành công")
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Order | Thirtify</title>
            </Helmet>
            <div>
                <Header/>
                <div className="order-content">
                    <div className="order-section">
                        <div className="content-header">
                            Xác nhận đơn hàng
                        </div>
                        <div className="order-status">
                            <div className="status-item">
                                <img className="status-icon" src={IC_BILL}/>
                                <div className="status-name">Tiếp nhận</div>
                            </div>
                        </div>
                        <div className="content-header">
                            Thông tin người nhận
                        </div>
                        <div className="buyer-info">
                            <input className="buyer-info-input" autoComplete="off" placeholder="Số điện thoại"
                                   type="text"
                                   value={params.phone}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           phone: e.target.value
                                       }));
                                   }}/>
                            <input className="buyer-address-input" autoComplete="off" placeholder="Địa chỉ"
                                   type="text"
                                   value={params.address}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           address: e.target.value
                                       }));
                                   }}/>
                        </div>
                        <div className="content-header">
                            Sản phẩm
                        </div>
                        <Link to={`/product/${product._id}`} className="search-item">
                            <div className="left-search-item">
                                <div
                                    className="search-item-img"
                                    style={{ backgroundImage: `url(${product?.image?product?.image[0]:DEFAULT_IMG4})` }}
                                    title="This is a Product image"
                                ></div>
                            </div>
                            <div className="right-search-item">
                                <div>
                                    <p className="search-item-name" title={`${product?.name}`}>
                                        {product?.name}
                                    </p>
                                    <p className="search-item-price">{product?.price}</p>
                                </div>

                            </div>
                        </Link>
                        <div className="content-header">
                            Phương thức giao hàng
                        </div>
                        <div className="delivery">- Tự thỏa thuận chi phí giao hàng</div>
                        <div className="content-header">
                            Phương thức thanh toán
                        </div>
                        <div className="delivery">Liên hệ</div>
                        <div className="content-header">
                            Thông tin thanh toán
                        </div>
                        <div className="payment-section">
                            <div className="payment">Đơn giá</div>
                            <div className="payment">{product?.price}</div>
                        </div>
                        <div className="payment-section">
                            <div className="payment">Tổng thanh toán</div>
                            <div className="payment">{product?.price}</div>
                        </div>
                        {/*<div className="content-header">*/}
                        {/*    Ghi chú*/}
                        {/*</div>*/}
                        {/*<div className="buyer-info">*/}
                        {/*    <textarea rows={4} className="buyer-info-input" autoComplete="off" placeholder="Ghi chú"*/}
                        {/*           type="text"*/}
                        {/*           value={params.note}*/}
                        {/*           onChange={(e) => {*/}
                        {/*               setParams({*/}
                        {/*                   note: e.target.value*/}
                        {/*               });*/}
                        {/*           }}/>*/}
                        {/*</div>*/}
                        <div className="order-confirm">
                            <div className="buy" onClick={handleOrder}>
                                <Link  >
                                    <div className="buy-text">Đặt Hàng</div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default OrderPage;
