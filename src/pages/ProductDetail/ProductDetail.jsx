import './ProductDetail.css'
import Slider from '../../component/slider/slider'
import sliderData from '../../data/sliderData/sliderData'
import Header from "../../components/Header";
import {useAsyncFn} from "react-use";
import {getAllProduct, getProductDetail} from "../../store/products/function";
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {formatDate} from "../../utils/formatDate";
import {message} from "antd";
import {getUserById} from "../../store/user/function";
function ProductDetail() {
    const [seller,setSeller] = useState({})
    const {id} = useParams()
    const [product,setProduct]=useState(
        {
            _id: "",
            name: "",
            categoryId: "",
            shopId: "",
            price: "",
            quantity: 0,
            image: [],
            description: "",
            address: "",
            createAt: "",
            __v: 0
        }
    )

    const [{loading: refreshing}, getDetail] = useAsyncFn( async ()=>{
        const res = await getProductDetail(id);
        if (res && res.code === 1){
            setProduct(res.data)
        }
        else {message.error(res.data)
        return
        }

    },[id])
    const getSeller = useCallback(async (userId)=>{
        const res = await getUserById(userId)
        if (res && res.code === 1){
            setSeller(res.data)
        }

    },[])
    useEffect(()=>{
        getDetail().then()
    },[id])
    useEffect(()=>{
        if(product.shopId){
            getSeller(product.shopId).then()
        }
    },[product])


    return (
        <div>
            <Header/>
            <div className="product">
                <div className="detail">
                    <div style={{ margin: "10px 0px" }}></div>
                    <div className="col-md-8">
                        <div className="detail-view">
                            <Slider sliderData={product.image?.map((item)=>({image:item}))} />
                            <div className="inf">
                                <div className="inf-container">
                                    <h1 className="inf-title">{product?.name}</h1>
                                    <div className="inf-price">
                                        <div className="inf-price-container">
                                            <div className="inf-price-left">
                                                <div className="price">{product?.price} đ</div>
                                            </div>
                                            {/*<div className="inf-price-right">*/}
                                            {/*    <div className="share">*/}
                                            {/*        <button className="btn-share" type="button">*/}
                                            {/*            <div className="btn-share-text">Chia sẻ</div>*/}
                                            {/*        </button>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="save">*/}
                                            {/*        <button className="btn-save" type="button">*/}
                                            {/*            <div className="btn-save-text">Lưu tin</div>*/}
                                            {/*        </button>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                    <div className="inf-location">
                                        <div className="inf-location-text">{product?.address}</div>
                                    </div>
                                    <div className="inf-time">
                                        <div className="inf-time-text">Đăng vào {formatDate(product?.createAt)}</div>
                                    </div>
                                    <div className="inf-conf">
                                        <div className="inf-conf-text">Tin đã được kiểm duyệt</div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <h1 className="description-title">Mô tả chi tiết</h1>
                                <p className="description-text">{product?.description}</p>
                            </div>
                            <div className="parameter">

                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        {/* <div style={{ margin: "10px 0px" }}></div> */}
                        <div className="sell-inf">
                            <div className="seller">
                                <div className="seller-inf">
                                    <div className="presentation">
                                        <div className="avt">
                                            <img className='img-avt' src="https://cdn.chotot.com/VyMVglwYyCy0Xp0gfal8I2hPgBJcxYU3UWfMNgH7gy4/preset:shopava/plain/48f5959f89dbce95575bfe7f810d1af3-2759690703674197086.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pro">
                                    <div className="pro-flex">
                                        {seller && <div className="name-store">{seller.fullName}</div>}

                                        {/*<button className='btn-view' type="button">*/}
                                        {/*    Xem cửa hàng*/}
                                        {/*</button>*/}
                                    </div>
                                    <div className="store">
                                        <div className='store-text'>&nbsp;Người bán</div>
                                    </div>
                                    {/*<div className="status-store">*/}
                                    {/*    <div className="bullet-online">•</div>*/}
                                    {/*    <div className="status-online">Hoạt động 10 giờ trước</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact-title">Liên hệ với người bán</div>
                                <div className="contact-container">
                                    <div className="buy">
                                        <div className="buy-text">MUA NGAY</div>
                                    </div>
                                    <div className="contact-phone">
                                        <div className="contact-phone-number">
                                            {seller && <div className="phone-number">{seller?.phoneNumber}</div>}

                                        </div>
                                        <div className="call">LIÊN HỆ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="op">
                                <div className="op-support">
                                    <div className="op-text">Cần trợ giúp</div>
                                </div>
                                <div className="op-warning">
                                    <div className="op-text">Báo cáo tin này</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
