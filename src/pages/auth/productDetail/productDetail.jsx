import './productDetail.css'
import Slider from '../../component/slider/slider'
import sliderData from '../../data/sliderData/sliderData'
import '../../assets/FontAwesome.Pro.6.1.1/fontawesome-pro-6.1.1-web/css/all.min.css'
function ProductDetail() {
    return (
        <div>
            <div className="product">
                <div className="detail">
                    <div style={{ margin: "10px 0px" }}></div>
                    <div className="col-md-8">
                        {/* <div className="img-wrapper">
                            <div className="slick-slider">
                                <button type="button" className="btn-pre">
                                    <i></i>
                                </button>
                                <div className="slick-list"></div>
                                <button type="button" className="btn-next">
                                    <i></i>
                                </button>
                                <div className="img-caption"></div>
                            </div>
                        </div> */}
                        <div className="detail-view">
                            <Slider sliderData={sliderData} />
                            <div className="inf">
                                <div className="inf-container">
                                    <h1 className="inf-title">BMW 320i đỏ nội thất kem độ một số đồ chơi xịn xò</h1>
                                    <div className="inf-price">
                                        <div className="inf-price-container">
                                            <div className="inf-price-left">
                                                <div className="price">650.000.000 đ</div>
                                            </div>
                                            <div className="inf-price-right">
                                                <div className="share">
                                                    <button className="btn-share" type="button">
                                                        <i className="btn-icon-share fa-solid fa-share"></i>
                                                        <div className="btn-share-text">Chia sẻ</div>
                                                    </button>
                                                </div>
                                                <div className="save">
                                                    <button className="btn-save" type="button">
                                                        <i className="btn-icon-save btn-icon-saved fa-regular fa-heart"></i>
                                                        <div className="btn-save-text">Lưu tin</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inf-location">
                                        <i className="inf-location-icon fa-light fa-location-dot"></i>
                                        <div className="inf-location-text">Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</div>
                                    </div>
                                    <div className="inf-time">
                                        <i className="inf-time-icon fa-light fa-timer"></i>
                                        <div className="inf-time-text">Đăng 3 ngày trước</div>
                                    </div>
                                    <div className="inf-conf">
                                        <i className="inf-conf-icon fa-light fa-shield-check"></i>
                                        <div className="inf-conf-text">Tin đã được kiểm duyệt</div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <h1 className="description-title">Mô tả chi tiết</h1>
                                <p className="description-text">Hyundai Santafe full xăng cao cấp 2.5L
                                    Xe màu xanh, sản xuất năm 2021, tên cá nhân, biển Hà Nội, lăn bánh 10.000 km zin, xe cực đẹp và chất, máy móc gầm bệ nguyên bản.

                                    Cam kết xe không đâm va, không ngập nước, không phạt nguội, pháp lý xe minh bạch đầy đủ điều kiện sang tên.

                                    Quý khách vui lòng liên hệ Ecoauto SURE để biết thêm thông tin và giá ưu đãi nhất.</p>
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
                                        <div className="name-store">DSCars</div>
                                        <button className='btn-view' type="button">
                                            Xem cửa hàng
                                            <i class="icon-btn-view fa-solid fa-angle-right"></i>
                                        </button>
                                    </div>
                                    <div className="store">
                                        <i class="icon-store fa-solid fa-store"></i>
                                        <div className='store-text'>&nbsp;Cửa hàng</div>
                                    </div>
                                    <div className="status-store">
                                        <div className="bullet-online">•</div>
                                        <div className="status-online">Hoạt động 10 giờ trước</div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact-title">Liên hệ với người bán</div>
                                <div className="contact-container">
                                    <div className="buy">
                                        <div className="buy-text">MUA NGAY - ĐẶT CỌC</div>
                                    </div>
                                    <div className="contact-phone">
                                        <div className="contact-phone-number">
                                            <i class="icon-phone fa-solid fa-phone-volume"></i>
                                            <div className="phone-number">012345678</div>
                                        </div>
                                        <div className="call">BẤM ĐỂ GỌI</div>
                                    </div>
                                </div>
                            </div>
                            <div className="op">
                                <div className="op-support">
                                    <i class="icon-support fa-regular fa-headset"></i>
                                    <div className="op-text">Cần trợ giúp</div>
                                </div>
                                <div className="op-warning">
                                    <i class="icon-warning fa-regular fa-triangle-exclamation"></i>
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