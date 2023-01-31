import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import './CreateProduct.css'
import {DEFAULT_IMG4, IC_BILL} from "../../assets";
import {Link, useParams} from "react-router-dom";
import {useProduct} from "../../store/products";
import {createOrder} from "../../store/order/function";
import {message} from "antd";
const CreateProduct = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [params,setParams] = useState({
        image : "",
        name : "",
        address :user?.address,
        des : "",
        price : "",
        quantity : "",

    } )
    const handleCreate = async ()=>{
       // const res = await createOrder({
       //      name : product?.name,
       //      address : params?.address,
       //      phoneNumber : params?.phone,
       //      productId : productId,
       //      price :parseInt(product?.price.replace(/đ/g, ""))*1000 ,
       //      paymentMethod : "Tự thỏa thuận",
       //      deliveryMethod : "Tự thỏa thuận chi phí giao hàng",
       //      status : "0",
       //      buyerId : user._id,
       //      shopId : product?.shopId
       //  })
       //  console.log("res",res)
       //  if (res && res.code === 1) {
       //      message.success("Đặt bán thành công");
       //      setTimeout(() => {
       //          window.location.href = "/";
       //      }, 1000);
       //  }
       //  else  message.error("Đặt hàng không thành công")
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
                            Thêm ảnh
                        </div>

                        <div className="content-header">
                            Tên sản phẩm
                        </div>
                        <div className="buyer-info">
                            <input className="buyer-info-input" autoComplete="off" placeholder="Tên sản phẩm"
                                   type="text"
                                   value={params.name}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           name: e.target.value
                                       }));
                                   }}/>
                        </div>
                        <div className="content-header">
                            Danh mục
                        </div>
                        <div className="content-header">
                            Mô tả
                        </div>
                        <div className="buyer-info">
                            <textarea rows={3} className="buyer-info-input" autoComplete="off" placeholder="Mô tả"
                                   type="text"
                                   value={params.des}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           des: e.target.value
                                       }));
                                   }}/>
                        </div>
                        <div className="content-header">
                            Số lượng
                        </div>
                        <div className="buyer-info">
                            <input className="buyer-info-input" autoComplete="off" placeholder="Số lượng"
                                   type="number"
                                   value={params.quantity}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           quantity: e.target.value
                                       }));
                                   }}/>
                        </div>
                        <div className="content-header">
                            Giá
                        </div>
                        <div className="buyer-info">
                            <input className="buyer-info-input" autoComplete="off" placeholder="Giá"
                                   type="text"
                                   value={params.price}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           price: e.target.value
                                       }));
                                   }}/>
                        </div>
                        <div className="content-header">
                            Địa chỉ
                        </div>
                        <div className="buyer-info">
                            <input className="buyer-info-input" autoComplete="off" placeholder="Địa chỉ"
                                   type="text"
                                   value={params.address}
                                   onChange={(e) => {
                                       setParams(prev => ({
                                           ...prev,
                                           address: e.target.value
                                       }));
                                   }}/>
                        </div>

                        <div className="order-confirm">
                            <div className="buy" onClick={handleCreate}>
                                <Link  >
                                    <div className="buy-text">Đăng sản phẩm</div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default CreateProduct;
