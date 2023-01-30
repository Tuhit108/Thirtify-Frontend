import './ProfileEdit.css'

function ProfileEdit() {
    return (
        <div>
            <div className="profile-edit">
                <div className="pro-edit-title">Thông tin cá nhân</div>
                <form className="pro-edit-form" action="">
                    <div className="edit-form-container">
                        <div className="edit-form">
                            <div className="edit-form-content">
                                <ul>
                                    <li>
                                        <div className="edit-title">Họ và tên</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Số điện thoại</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Email</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">CMND/CCCD/Hộ chiếu</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Ngày cấp</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Nơi cấp</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Giới tính</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="edit-title">Ngày sinh</div>
                                        <div className="edit-content">
                                            <input placeholder="Chưa có thông tin" type="text" className="edit-input" name="name"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="edit-form-confirm">
                            <div className="edit-form-confirm-content">
                                <button className="edit-form-confirm-btn" type="submit" to="/profile/edit">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileEdit;
