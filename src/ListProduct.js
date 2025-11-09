import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Loại bỏ: import { products } from "./models/product"; // Không cần thiết nếu dùng API

const ListProduct = () => {
  const [listproduct, SetListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Lấy dữ liệu từ Backend khi component khởi tạo
  useEffect(() => {
    const LayDulieutuBackend = async () => {
      try {
        const res = await axios.get(
          "https://6731c05f7aaf2a9aff11dd05.mockapi.io/products"
        );
        SetListProduct(res.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err.message);
        // Có thể thêm logic sử dụng dữ liệu local nếu API thất bại
      } finally {
        setLoading(false);
      }
    };
    LayDulieutuBackend();
  }, []);

  // Hiển thị trạng thái Loading
  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center", fontSize: "1.5em" }}>Đang tải dữ liệu...</div>;
  }

  // Hiển thị nếu không có sản phẩm
  if (listproduct.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center", fontSize: "1.2em", color: 'red' }}>Không tìm thấy sản phẩm nào từ API.</div>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Quản lý Sản phẩm Điện thoại (Lấy từ Mock API)</h2>
      <div
        style={{
          display: "grid",
          // Đảm bảo giao diện responsive hơn và rộng hơn
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "25px",
        }}
      >
        {listproduct.map((p) => (
          <div
            key={p.id}
            // Điều hướng đến trang chi tiết sản phẩm điện thoại
            onClick={() => navigate(`/dienthoai/${p.id}`)} 
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ 
                height: "220px", 
                width: "auto",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            {/* Hiển thị Tên sản phẩm */}
            <h4 style={{ margin: "5px 0", color: "#007bff", fontSize: "1.2em" }}>{p.title}</h4>
            
            {/* Hiển thị Giá */}
            <p style={{ fontWeight: "600", color: "#dc3545", fontSize: "1.1em" }}>
                Giá: {p.price ? p.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Giá không rõ'}
            </p>
            
            {/* Giả định trạng thái */}
            <small style={{ color: "#6c757d" }}>Tình trạng: Còn hàng</small>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListProduct;