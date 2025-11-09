import { products } from "./models/product";
import React from "react";
import { useNavigate } from "react-router-dom";

const TrangDienThoai = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý Sản phẩm Công Nghệ</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px", 
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/dienthoai/${p.id}`)}
            style={{
              border: "1px solid #c0c0c0",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ 
                height: "220px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h4 style={{ margin: "5px 0", color: "#007bff", fontSize: "1.2em" }}>{p.title}</h4>
            <p style={{ fontWeight: "600", color: "#dc3545", fontSize: "1.1em" }}>
                Giá: {p.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
            <small style={{ color: "#6c757d" }}>Tình trạng: Còn hàng ({p.stock || 'SL không rõ'})</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrangDienThoai;