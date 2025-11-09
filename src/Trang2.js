import React from "react";

const TrangNhanVien = () => {
  const dsnv = [
    {
      id: 1,
      hoten: "Nguyễn Văn Tèo",
      chucvu: "Quản lý Cửa hàng",
      email: "heoluong88@gmail.com",
      anh: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg",
    },
    {
      id: 2,
      hoten: "Trần Văn Ngọ",
      chucvu: "Trưởng nhóm Bán hàng",
      email: "nhothucsu@gmail.com",
      anh: "https://i.pinimg.com/564x/c8/cc/68/c8cc6816a2448d0a03a5e46e932ce7a9.jpg",
    },
    {
      id: 3,
      hoten: "Lê Văn Nhọ",
      chucvu: "Nhân viên Bán hàng",
      email: "deptrai@gmail.com",
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUVP-MFj1Ow_pkP5iJ89dNfXafkYsC1evmQ&s",
    },
    {
      id: 4,
      hoten: "Trần Minh Lương",
      chucvu: "Kỹ thuật viên Hỗ trợ",
      email: "teoluong77@gmail.com",
      anh: "https://hoichimtroi.com/wp-content/uploads/2025/07/anh-meo-ngau-19.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: "30px 20px",
      }}
    >
        <h1 style={{ marginBottom: "30px", color: "#333" }}>Đội ngũ Quản lý Cửa hàng Điện thoại</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {dsnv.map((motnhanvien) => (
          <div
            key={motnhanvien.id}
            style={{
              height: "auto",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
              cursor: "default"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={motnhanvien.anh}
              alt={motnhanvien.hoten}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
                border: "3px solid #007bff",
              }}
            />
            <h3 style={{ margin: "10px 0 5px", color: "#333", fontSize: "1.1em" }}>{motnhanvien.hoten}</h3>
            <p style={{ fontWeight: "bold", color: "#007bff", margin: "0 0 5px" }}>{motnhanvien.chucvu}</p>
            <p style={{ color: "#6c757d", fontSize: "0.9em" }}>{motnhanvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrangNhanVien;