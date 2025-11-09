import { products } from "./models/product"; 
import React from "react";
import { useNavigate } from "react-router-dom";


const ListProduct = () => {
  
  const listproduct = products;
  const navigate = useNavigate();

  
  if (listproduct.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center", fontSize: "1.2em", color: 'red' }}>Không tìm thấy sản phẩm nào trong dữ liệu cục bộ.</div>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Quản lý Sản phẩm Công Nghệ</h2> {/* Đổi tiêu đề */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "25px",
        }}
      >
        {listproduct.map((p) => (
          <div
            key={p.id}
            
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
            
            <h4 style={{ margin: "5px 0", color: "#007bff", fontSize: "1.2em" }}>{p.title}</h4>
            
            {/* Định dạng giá VND */}
            <p style={{ fontWeight: "600", color: "#dc3545", fontSize: "1.1em" }}>
                Giá: {p.price ? p.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'Giá không rõ'}
            </p>
            
            {/* Hiển thị thông tin đánh giá để thay cho "Tình trạng" */}
            <small style={{ color: "#6c757d" }}>
                Đánh giá: {p.rating.rate} ({p.rating.count} reviews)
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListProduct;