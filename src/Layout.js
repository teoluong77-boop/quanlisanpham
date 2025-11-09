import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuTop from "./layouts/MenuTop";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";
import React from 'react'; // Cần import React

// Thêm useNavigate để có thể điều hướng trong React
import { useNavigate } from "react-router-dom"; 

const Layout = () => {
    const navigate = useNavigate();

    // Hàm xử lý khi click vào logo
    const handleLogoClick = (e) => {
        e.preventDefault();
        
        // Kiểm tra xem đã đăng nhập chưa
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

        if (isAuthenticated) {
            // Nếu đã đăng nhập, vào thẳng trang quản lý
            navigate('/ManageProducts');
        } else {
            // Nếu chưa đăng nhập, chuyển đến trang đăng nhập
            navigate('/admin-login');
        }
    };

    return (
        
        <div className="app-container">
            <header id="header" style={{ minHeight: 169 }}>
                <div className="header_top">
                    <div className="container_main">
                        <MenuTop />
                    </div>
                </div>

                <div id="main_menu"></div>

                <div className="header">
                    <div className="container_main">
                        <div className="logo">
                            {/*  SỬA ĐỂ LOGO CHUYỂN HƯỚNG THEO LOGIC XÁC THỰC  */}
                            <a href="/ManageProducts" onClick={handleLogoClick}>
                                <img
                                    src="https://intriphat.com/wp-content/uploads/2024/04/logo-dien-thoai-dep-11.jpg"
                                    alt="Logo Quản Lý"
                                    style={{ height: '80px', width: 'auto' }} // Đã chỉnh kích thước
                                />
                            </a>
                        </div>

                        <div id="main_menu">
                            <MenuBox />
                        </div>
                    </div>
                </div>
            </header>

            <div className="news-home">
                <div className="container_main" style={{ minHeight: 5500 }}>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;