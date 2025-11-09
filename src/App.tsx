import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./styles.css";
//@ts-ignore
import Home from "./Home";
//@ts-ignore
import Layout from "./Layout";
//@ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Trang2 from "./Trang2";
// @ts-ignore
import ListProduct from "./ListProduct.js"; 
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP.js";
// @ts-ignore
import ManageProducts from "./ManageProducts.js"; 
//@ts-ignore
import Chitietsanpham from "./Chitietsanpham"; 
// @ts-ignore
import AdminLogin from "./AdminLogin"; 


// Hàm kiểm tra trạng thái xác thực ban đầu từ Local Storage
const checkAuth = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

// Component Bảo vệ Route (Chỉ cho phép truy cập nếu đã đăng nhập)
const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập Admin
        return <Navigate to="/admin-login" replace />; 
    }
    return children ? children : <Outlet />;
};

export default function App() {
    // State để theo dõi trạng thái đăng nhập
    const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());
    
    // Hàm gọi khi đăng nhập thành công
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <BrowserRouter>
            <Routes>
                
                {/* 1. Route Đăng nhập Admin (KHÔNG NẰM TRONG Layout) */}
                <Route path="/admin-login" element={<AdminLogin onLoginSuccess={handleLogin} />} />
                
                {/* 2. Route Cha Layout */}
                <Route path="/" element={<Layout />}> 
                    
                    {/* 🚨 SỬA: Trang Chủ (index) giờ là Danh sách sản phẩm (ListProduct) */}
                    <Route index element={<ListProduct />} /> 
                    
                    {/* Route ListProduct cũ, giữ lại để truy cập qua /ListProduct nếu cần */}
                    <Route path="ListProduct" element={<ListProduct />} /> 

                    {/* Trang Chi tiết sản phẩm */}
                    <Route path="/dienthoai/:id" element={<Chitietsanpham />} /> 
                    
                    {/* BẢO VỆ ROUTE QUẢN LÝ SẢN PHẨM */}
                    <Route 
                        path="ManageProducts" 
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <ManageProducts /> 
                            </ProtectedRoute>
                        } 
                    />

                    {/* Các Routes công khai khác, giữ nguyên */}
                    <Route path="ListProducts_SP" element={<ListProducts_SP />} />
                    <Route path="Trang1" element={<Trang1 />} /> 
                    <Route path="Trang2" element={<Trang2 />} /> 
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}