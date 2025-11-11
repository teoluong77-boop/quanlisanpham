import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuTop = () => {
  const navigate = useNavigate();
  // Khởi tạo state cho Admin/User login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 

  // Hàm kiểm tra trạng thái đăng nhập từ Local Storage
  useEffect(() => {
    const checkAuthStatus = () => {
      // isAuthenticated: Dùng cho Admin Login (ProtectedRoute)
      const adminStatus = localStorage.getItem('isAuthenticated') === 'true'; 
      // currentUser: Dùng cho Khách hàng Login
      const user = localStorage.getItem('currentUser');
      
      if (adminStatus) {
        // Đã đăng nhập với vai trò Admin
        setIsLoggedIn(true);
        setCurrentUser({ username: 'Admin', role: 'admin' });
      } else if (user) {
        // Đã đăng nhập với vai trò Khách hàng
        try {
          const parsedUser = JSON.parse(user);
          setIsLoggedIn(true);
          setCurrentUser(parsedUser);
        } catch (e) {
          // Xảy ra lỗi khi parse user, xóa key bị lỗi
          localStorage.removeItem('currentUser');
          setIsLoggedIn(false);
          setCurrentUser(null);
        }
      } else {
        // Chưa đăng nhập
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    };

    // Lắng nghe sự kiện storage để cập nhật trạng thái ngay lập tức
    window.addEventListener('storage', checkAuthStatus);
    checkAuthStatus(); // Kiểm tra khi component mount

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  // Hàm xử lý Đăng xuất chung (Admin hoặc User)
  const handleLogout = () => {
    // Xóa tất cả các khóa xác thực
    localStorage.removeItem('isAuthenticated'); 
    localStorage.removeItem('currentUser'); 
    setIsLoggedIn(false);
    setCurrentUser(null);
    // Chuyển hướng về trang chủ sau khi đăng xuất
    navigate('/'); 
  };

  // Nút Tài khoản/Đăng nhập chung
  const AuthButton = isLoggedIn ? (
    // Nếu Đã đăng nhập: Hiển thị tên và ĐĂNG XUẤT
    <a href="#" onClick={handleLogout} style={{ color: '#c4820e', fontWeight: 'bold' }}>
      {currentUser?.username} ({currentUser?.role === 'admin' ? 'QL' : 'KH'}) - Đ.XUẤT
    </a>
  ) : (
    // Nếu Chưa đăng nhập: Hiển thị ĐĂNG KÝ / ĐĂNG NHẬP (Khách hàng)
    <a href="#" onClick={() => navigate('/user-auth')} style={{ color: '#fff' }}>
      ĐĂNG KÝ / ĐĂNG NHẬP
    </a>
  );
  
  // Nút Admin Login (Hiển thị nếu người dùng chưa đăng nhập)
  const AdminLoginButton = !isLoggedIn ? (
    <a href="#" onClick={() => navigate('/admin-login')} style={{ color: '#fff', marginLeft: '10px' }}>
      (ĐN QL)
    </a>
  ) : null;


  return (
    <div className="menu_top"> 
      <ul 
        style={{
          display: 'flex',
          justifyContent: 'space-between', 
          width: '100%',
          listStyle: 'none', 
          padding: 0,
          margin: 0
        }}
      >
        <li>
          <a href="/ListProduct">Sản Phẩm</a>
        </li>
        <li>
          <a href="/ManageProducts" target="_self" rel="noopener noreferrer">
            Nhân Viên
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://cellphones.com.vn/mobile.html"
            rel="noopener noreferrer"
          >
            Thông Tin Các Sản Phẩm
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            href="https://smember.com.vn/login?pre_uri=%2Forder"
            rel="noopener noreferrer"
          >
            Tra Cứu Đơn Hàng
          </a>
        </li>
        <li>
          <a target="_blank" href="https://cellphones.com.vn/dia-chi-cua-hang" rel="noopener noreferrer">
            Cửa Hàng Xung Quanh
          </a>
        </li>
        <li>
          <a href="/lien-he" rel="noopener noreferrer">Liên hệ</a>
        </li>
        
        {/* NÚT TÀI KHOẢN VÀ ĐĂNG NHẬP ADMIN */}
        <li style={{ marginLeft: 'auto', paddingLeft: '20px', display: 'flex', alignItems: 'center' }}>
          {AuthButton}
          {/* Chỉ hiển thị nút Admin Login nếu người dùng chưa đăng nhập */}
          {!isLoggedIn && AdminLoginButton}
        </li>
      </ul>
    </div>
  );
};
export default MenuTop;