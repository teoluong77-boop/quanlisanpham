import React, { useState } from "react";

const Home = () => {
  const headerText = "QUẢN LÝ SẢN PHẨM CÔNG NGHỆ (SỬ DỤNG REACT STATE)";

  // State chính cho danh sách sản phẩm
  const [productList, setProductList] = useState([
    { id: "L101", name: "MacBook Air M3", category: "Laptop", stock: 8 },
    { id: "L102", name: "iPad Pro 13 inch", category: "Tablet", stock: 12 },
    { id: "L103", name: "Sạc dự phòng Anker 20K", category: "Phụ kiện", stock: 50 },
    { id: "L104", name: "Tai nghe Sony XM5", category: "Phụ kiện", stock: 45 },
    { id: "L105", name: "Samsung Galaxy S24", category: "Smartphone", stock: 22 },
  ]);

  // State cho ô nhập tên mới
  const [newName, setNewName] = useState("");

  // Hàm cập nhật productList khi gõ trong ô input (Cập nhật trực tiếp)
  const handleChangeProduct = (id, field, value) => {
    setProductList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Hàm sửa Tên sản phẩm bằng giá trị từ ô nhập newName
  const handleUpdateProduct = (id) => {
    if (!newName.trim()) {
      alert("Vui lòng nhập tên mới trước khi sửa!");
      return;
    }
    
    setProductList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
    setNewName(""); // reset ô nhập sau khi cập nhật
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>{headerText}</h3>

      {/* Hiển thị bảng productList (State) */}
      <div style={{ marginTop: "30px" }}>
        
        {/* Ô nhập tên mới */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Nhập tên mới để sửa: </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Tên sản phẩm muốn đổi..."
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '300px' }}
          />
        </div>

        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#d1e7dd' }}>
              <td>ID</td>
              <td>Tên Sản phẩm (Sửa trực tiếp)</td>
              <td>Danh mục</td>
              <td>Tồn kho (Sửa trực tiếp)</td>
              <td>Thao tác Sửa Tên</td>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      handleChangeProduct(product.id, "name", e.target.value)
                    }
                    style={{ width: '95%', border: '1px solid #0d6efd', padding: '5px' }}
                  />
                </td>
                <td>{product.category}</td>
                <td>
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) =>
                      handleChangeProduct(product.id, "stock", parseInt(e.target.value) || 0)
                    }
                    style={{ width: '80px', textAlign: 'center' }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="Áp dụng tên mới"
                    onClick={() => handleUpdateProduct(product.id)}
                    style={{ backgroundColor: '#0d6efd', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <small style={{ color: 'green', marginTop: '10px', display: 'block' }}>
          *Mọi thay đổi trong bảng (input text/number) và khi nhấn nút "Áp dụng tên mới" đều sử dụng State, do đó giao diện sẽ được cập nhật tự động.
        </small>
      </div>
    </div>
  );
};

export default Home;