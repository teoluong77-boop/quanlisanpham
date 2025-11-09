
// src/ManageProducts.js
import React, { useEffect, useState } from "react";
import { products as seedProducts } from "./models/product";
import { useNavigate } from "react-router-dom";

/**
 * ManageProducts
 * - Loads products from localStorage if available, otherwise from seedProducts.
 * - Supports: list, add, edit, delete (soft prompt), search, filter by category, sort by price/title.
 * - Persists all changes to localStorage under key "managed_products_v1"
 * - Form validation: required title, positive price, category required.
 */

const STORAGE_KEY = "managed_products_v1";

function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore parse errors
  }
  // copy seed with numeric ids
  return seedProducts.map((p, idx) => ({ ...p, id: Number(p.id) || idx + 1 }));
}

function saveProducts(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

const emptyForm = {
  id: null,
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

export default function ManageProducts() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = loadProducts();
    setList(data);
  }, []);

  useEffect(() => {
    saveProducts(list);
  }, [list]);

  const resetForm = () => {
    setForm(emptyForm);
    setErrors({});
    setEditing(false);
  };

  const validate = (f) => {
    const e = {};
    if (!f.title || f.title.trim().length < 2) e.title = "Tiêu đề phải ít nhất 2 ký tự";
    if (f.price === "" || isNaN(Number(f.price)) || Number(f.price) < 0) e.price = "Giá phải là số >= 0";
    if (!f.category || f.category.trim().length === 0) e.category = "Vui lòng chọn loại sản phẩm";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    if (editing) {
      setList((prev) => prev.map((p) => (p.id === form.id ? { ...p, ...form, price: Number(form.price) } : p)));
    } else {
      const newId = list.length ? Math.max(...list.map((p) => Number(p.id))) + 1 : 1;
      const newProduct = { ...form, id: newId, price: Number(form.price), rating: { rate: 0, count: 0 } };
      setList((prev) => [newProduct, ...prev]);
    }
    resetForm();
  };

  const handleEdit = (p) => {
    setForm({ ...p, price: String(p.price) });
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;
    setList((prev) => prev.filter((p) => p.id !== id));
  };

  const filtered = list
    .filter((p) => (categoryFilter ? p.category === categoryFilter : true))
    .filter((p) => (query ? p.title.toLowerCase().includes(query.toLowerCase()) || String(p.id) === query : true));

  const sorted = (() => {
    if (sortBy === "price_asc") return [...filtered].sort((a,b)=>a.price-b.price);
    if (sortBy === "price_desc") return [...filtered].sort((a,b)=>b.price-a.price);
    if (sortBy === "title_asc") return [...filtered].sort((a,b)=>a.title.localeCompare(b.title));
    if (sortBy === "title_desc") return [...filtered].sort((a,b)=>b.title.localeCompare(a.title)).reverse();
    return filtered;
  })();

  const categories = Array.from(new Set(list.map((p)=>p.category))).filter(Boolean);

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h2>Quản lý sản phẩm</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20, background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div style={{ flex: "2 1 300px" }}>
            <label>Tiêu đề</label>
            <input value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} style={{width:"100%"}} />
            {errors.title && <div style={{color:"red"}}>{errors.title}</div>}
          </div>
          <div style={{ flex: "1 1 150px" }}>
            <label>Giá</label>
            <input value={form.price} onChange={(e)=>setForm({...form, price: e.target.value})} style={{width:"100%"}} />
            {errors.price && <div style={{color:"red"}}>{errors.price}</div>}
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <label>Loại</label>
            <input value={form.category} onChange={(e)=>setForm({...form, category: e.target.value})} style={{width:"100%"}} placeholder="vd: electronics, books" />
            {errors.category && <div style={{color:"red"}}>{errors.category}</div>}
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <label>Hình ảnh (URL)</label>
            <input value={form.image} onChange={(e)=>setForm({...form, image: e.target.value})} style={{width:"100%"}} />
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <label>Mô tả</label>
          <textarea value={form.description} onChange={(e)=>setForm({...form, description: e.target.value})} rows={3} style={{width:"100%"}} />
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <button type="submit">{editing ? "Lưu thay đổi" : "Thêm sản phẩm"}</button>
          <button type="button" onClick={resetForm}>Hủy</button>
          <button type="button" onClick={()=>{ localStorage.removeItem(STORAGE_KEY); setList(loadProducts()); }}>Reset từ seed</button>
          <button type="button" onClick={()=>navigate("/")}>Quay về trang chính</button>
        </div>
      </form>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <input placeholder="Tìm theo tiêu đề hoặc id..." value={query} onChange={(e)=>setQuery(e.target.value)} style={{flex:"1 1 300px"}} />
        <select value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)}>
          <option value="">-- Lọc theo loại --</option>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="">Sắp xếp</option>
          <option value="price_asc">Giá tăng dần</option>
          <option value="price_desc">Giá giảm dần</option>
          <option value="title_asc">Tiêu đề A→Z</option>
          <option value="title_desc">Tiêu đề Z→A</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
        {sorted.map(p=>(
          <div key={p.id} style={{background:"#fff", padding:12, borderRadius:8, boxShadow:"0 1px 6px rgba(0,0,0,0.06)", display:"flex", flexDirection:"column", minHeight:220}}>
            <div style={{flex:"0 0 140px", display:"flex", justifyContent:"center", alignItems:"center", background:"#f6f6f6", borderRadius:6, overflow:"hidden"}}>
              <img src={p.image || "/assets/images/khongcoanh.png"} alt={p.title} style={{maxHeight:140, objectFit:"contain"}} />
            </div>
            <h4 style={{margin:"8px 0 4px"}}>{p.title}</h4>
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>${p.price}</div>
              <div style={{fontSize:13, color:"#555"}}>{p.category}</div>
            </div>
            <div style={{display:"flex", gap:8, marginTop:8}}>
              <button onClick={()=>handleEdit(p)}>Sửa</button>
              <button onClick={()=>handleDelete(p.id)}>Xóa</button>
              <button onClick={()=>navigate(`/sanpham/${p.id}`)}>Xem</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:20, fontSize:13, color:"#666"}}>
        <strong>Ghi chú:</strong> Dữ liệu được lưu trong Local Storage (key: {STORAGE_KEY}). Bạn có thể reset về dữ liệu ban đầu bằng nút "Reset từ seed".
      </div>
    </div>
  );
}
