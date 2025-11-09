import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import Named Export { products } từ tệp dữ liệu của bạn.
// Lưu ý: Đảm bảo tệp './models/product' chỉ chứa data và interface, không có JSX
import { products } from './models/product'; 

const Chitietsanpham = () => {
    // 1. Lấy ID sản phẩm từ URL (React Router)
    const { id } = useParams(); 
    const navigate = useNavigate();

    // 2. Tìm sản phẩm tương ứng
    // Sửa lỗi: Loại bỏ cú pháp TypeScript 'as string' và khai báo kiểu
    const productId = parseInt(id);
    const product = products.find(p => p.id === productId);

    // Xử lý trường hợp không tìm thấy sản phẩm
    if (!product) {
        return (
            <div style={{ padding: '30px', textAlign: 'center' }}>
                <h2>Không tìm thấy sản phẩm (ID: {id})</h2>
                <button 
                    onClick={() => navigate(-1)} 
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }}
                >
                    Quay về trang trước
                </button>
            </div>
        );
    }
    
    // 3. Hàm xử lý Quay lại
    const handleGoBack = () => {
        navigate(-1); 
    };

    // 4. Hàm xử lý Thêm vào giỏ hàng
    const handleAddToCart = () => {
        alert(`Đã thêm ${product.title} vào Giỏ hàng thành công!`); 
    };

    // Định dạng giá tiền (VND)
    const formattedPrice = product.price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div style={{ padding: '30px', maxWidth: '1000px', margin: '30px auto', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            
            {/* Nút Quay lại danh sách */}
            <button 
                onClick={handleGoBack} 
                style={{
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 15px', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    marginBottom: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontWeight: 'bold'
                }}
            >
                &larr; Quay lại danh sách
            </button>

            {/* Khối Chi tiết Sản phẩm */}
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                
                {/* Cột 1: Hình ảnh */}
                <div style={{ flex: '1 1 350px', maxWidth: '45%' }}>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'contain' }} 
                    />
                </div>

                {/* Cột 2: Thông tin */}
                <div style={{ flex: '1 1 500px', maxWidth: '55%', paddingLeft: '20px' }}>
                    <h1 style={{ color: '#333', fontSize: '2em', marginBottom: '10px' }}>{product.title}</h1>
                    
                    {/* Giá tiền */}
                    <h2 style={{ color: '#dc3545', fontSize: '1.8em', marginBottom: '15px' }}>{formattedPrice}</h2>
                    
                    {/* Đánh giá */}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#ffc107' }}>
                        <span role="img" aria-label="rating">⭐</span>
                        <span style={{ color: '#333', marginLeft: '5px', fontWeight: 'bold' }}>{product.rating.rate}</span>
                        <span style={{ color: '#6c757d', marginLeft: '10px', fontSize: '0.9em' }}>({product.rating.count} đánh giá)</span>
                    </div>

                    {/* Mô tả */}
                    <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px', borderLeft: '3px solid #007bff', paddingLeft: '15px' }}>
                        <strong>Mô tả chi tiết:</strong> {product.description}
                    </p>

                    {/* Danh mục */}
                    <p style={{ color: '#007bff', fontWeight: 'bold' }}>Danh mục: {product.category}</p>
                    
                    {/* Nút Thêm vào giỏ hàng */}
                    <button 
                        onClick={handleAddToCart}
                        style={{
                            backgroundColor: '#28a745', 
                            color: 'white', 
                            border: 'none', 
                            padding: '12px 30px', 
                            borderRadius: '5px', 
                            cursor: 'pointer', 
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(40, 167, 69, 0.2)',
                            marginTop: '20px'
                        }}
                    >
                        <span role="img" aria-label="cart">🛒</span> Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chitietsanpham;