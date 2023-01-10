import './ProfilePage.css'
import '../../assets/FontAwesome.Pro.6.1.1/fontawesome-pro-6.1.1-web/css/all.min.css'
import defaultAvatar from '../../assets/images/default-avatar.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Profile() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        //Cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        //Them property preview 
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <div className="profile">
                <div className="profile-title">Thông tin cá nhân</div>
                <div className="profile-container">
                    <div className="profile-avt">
                        <div className="profile-avt-content">
                            {avatar ? (<img className="profile-img" src={avatar.preview} alt="Avatar" />)
                                : (<img className="profile-img" src={defaultAvatar} alt="Avatar" />)
                            }
                            <div className="profile-img-chose">
                                <i class="icon-chose fa-solid fa-camera"></i>
                                <input
                                    className="input-chose"
                                    type="file"
                                    onChange={handlePreviewAvatar}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="personal-inf">
                        <div className="personal-inf-container">
                            <div className="personal-inf-list">
                                <ul>
                                    <li>
                                        <div className="inf-title">Họ và tên</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Trường Trịnh Duy</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Số điện thoại</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">0123456789</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Email</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">123@gmail.com</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Địa chỉ</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Giáp bát, Hà Nội</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">CMND/CCCD/Hộ chiếu</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Chưa có thông tin</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Ngày cấp</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Chưa có thông tin</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Nơi cấp</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Chưa có thông tin</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Giới tính</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Chưa có thông tin</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Ngày sinh</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">Chưa có thông tin</div>
                                            <Link to="/profile/edit">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inf-title">Mật khẩu</div>
                                        <div className="inf-content">
                                            <div className="inf-content-text">******</div>
                                            <Link to="/profile/password">
                                                <i class="icon-edit fa-light fa-pen"></i>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;