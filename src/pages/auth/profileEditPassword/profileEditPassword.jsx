import './profileEditPassword.css'
import '../../../assets/FontAwesome.Pro.6.1.1/fontawesome-pro-6.1.1-web/css/all.min.css'

function ProfileEditPassword() {
    return (
        <div>
            <div className="profile-edit-password">
                <div className="edit-password-title">Thông tin cá nhân</div>
                <form className="edit-password-form" action="">
                    <div className="edit-password-container">
                        <div className="edit-password">
                            <div className="edit-password-content">
                                <ul>
                                    <li>
                                        <div className="edit-title">Mật khẩu hiện tại</div>
                                        <div className="edit-content">
                                            <input placeholder="Mật khẩu hiện tại" type="text" className="edit-input" name="name" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Mật khẩu</div>
                                        <div className="edit-content">
                                            <input placeholder="Mật khẩu" type="text" className="edit-input" name="name" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Xác nhận mật khẩu</div>
                                        <div className="edit-content">
                                            <input placeholder="Xác nhận mật khẩu" type="text" className="edit-input" name="name" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="edit-password-confirm">
                            <div className="edit-password-confirm-content">
                                <button className="edit-password-confirm-btn" type="submit" to="/profile/edit">Đổi mật khẩu</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileEditPassword;