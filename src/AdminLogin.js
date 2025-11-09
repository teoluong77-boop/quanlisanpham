import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Dữ liệu Admin giả định (Tài khoản/Mật khẩu)
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = '123456'; 

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // 1. Kiểm tra logic đăng nhập
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            // 2. Lưu trạng thái đăng nhập vào Local Storage
            localStorage.setItem('isAuthenticated', 'true');
            
            // 3. Gọi hàm thành công và chuyển hướng đến trang quản lý
            if(onLoginSuccess) {
                onLoginSuccess();
            }
            navigate('/ManageProducts');
        } else {
            setError('Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#f8f9fa' 
        }}>
            <div style={{ maxWidth: '400px', width: '90%', padding: '30px', border: '1px solid #dee2e6', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>Đăng nhập Quản lý</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    
                    <input
                        type="text"
                        placeholder="Tên đăng nhập (admin)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em' }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu (123456)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em' }}
                        required
                    />
                    
                    {error && <p style={{ color: '#dc3545', margin: 0, fontWeight: 'bold' }}>{error}</p>}
                    
                    <button 
                        type="submit"
                        style={{ padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1em' }}
                    >
                        Đăng nhập
                    </button>
                    <button 
                        type="button"
                        onClick={() => navigate('/')}
                        style={{ padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}
                    >
                        Quay lại Trang chủ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;