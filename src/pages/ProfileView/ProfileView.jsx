import './ProfileView.css'
import '../../assets/FontAwesome.Pro.6.1.1/fontawesome-pro-6.1.1-web/css/all.min.css'
import { Link } from 'react-router-dom'

function ProfileView() {

    return (
        <div>
            <div className="profile-view">
                <div className="profile-view-all">
                    <div className="profile-view-title">Trang cá nhân</div>
                    <div className="profile-view-container">
                        <div className="profile-view-content">
                            <div className="profile-view-left">
                                <div className="avatar-wrapper">
                                    <div className="avatar-container">
                                        <img className="avatar-img" src="https://cdn.chotot.com/uac2/24248263" alt="" />
                                    </div>
                                </div>
                                <div className="info-wrapper">
                                    <span className="info-name">Trịnh Duy Trường</span>
                                    <Link to="/profile" className="info-edit">
                                        <button className="info-btn-edit">Chỉnh sửa trang cá nhân</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="profile-view-right">
                                <div className="evaluate">
                                    <i class="icon-16 fa-regular fa-star" />
                                    <div className="rating-info">
                                        Đánh giá:
                                        <span className="rating-text"> Chưa có đánh giá</span>
                                    </div>
                                </div>
                                <div className="join-date">
                                    <i class="icon-16 fa-light fa-calendar-days" />
                                    <div className="date-info">
                                        Ngày tham gia:
                                        <span className="date-text"> 30/1/2023</span>
                                    </div>
                                </div>
                                <div className="address">
                                    <i class="icon-16 fa-regular fa-location-dot" />
                                    <div className="address-info">
                                        Địa chỉ:
                                        <span className="address-text"> Chưa cung cấp</span>
                                    </div>
                                </div>
                                <div className="feedback">
                                    <i class="icon-16 fa-regular fa-message-dots" />
                                    <div className="feedback-info">
                                        Phản hồi:
                                        <span className="feedback-text"> Chưa có thông tin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bcf4f4f4"></div>
                    <div className="profile-view-posted">
                        <div className="view-posted-container">
                            <h1 className="view-posted-title">Tin đăng</h1>
                            <div className="list-view-posted">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item-container">
                                                <div className="item-left">
                                                    <img className="item-left-img" src="https://cdn.chotot.com/Dde6hzdLcuYNXui2K7_bTtaKgqo64YBx3hJpV8lPXuI/preset:listing/plain/93610f7af1b30cd090c14f1c542d8ac2-2810259776806461402.jpg" alt="" />
                                                </div>
                                                <div className="item-right">
                                                    <div className="item-decription">
                                                        <h3 className="decription-text">iphone 6s plus 32Gb</h3>
                                                    </div>
                                                    <div className="item-price">
                                                        <span className="price">2.000.000 đ</span>
                                                    </div>
                                                    <div className="item-status">
                                                        <div className="item-status-container">
                                                            <div className="item-status-name">
                                                                <div className="item-status-name-text">Trịnh Duy Trường</div>
                                                            </div>
                                                            <div className="item-status-time">
                                                                <div className="item-status-time-text">Hôm qua</div>
                                                            </div>
                                                            <div className="item-status-location">
                                                                <div className="item-status-location-text">Hà Nội</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                    <div className="item">
                                            <div className="item-container">
                                                <div className="item-left">
                                                    <img className="item-left-img" src="https://cdn.chotot.com/Dde6hzdLcuYNXui2K7_bTtaKgqo64YBx3hJpV8lPXuI/preset:listing/plain/93610f7af1b30cd090c14f1c542d8ac2-2810259776806461402.jpg" alt="" />
                                                </div>
                                                <div className="item-right">
                                                    <div className="item-decription">
                                                        <h3 className="decription-text">iphone 6s plus 32Gb</h3>
                                                    </div>
                                                    <div className="item-price">
                                                        <span className="price">2.000.000 đ</span>
                                                    </div>
                                                    <div className="item-status">
                                                        <div className="item-status-container">
                                                            <div className="item-status-name">
                                                                <div className="item-status-name-text">Trịnh Duy Trường</div>
                                                            </div>
                                                            <div className="item-status-time">
                                                                <div className="item-status-time-text">Hôm qua</div>
                                                            </div>
                                                            <div className="item-status-location">
                                                                <div className="item-status-location-text">Hà Nội</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView;