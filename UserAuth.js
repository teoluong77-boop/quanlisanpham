import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
    const navigate = useNavigate();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const loadUsers = () => {
        const users = localStorage.getItem('app_users');
        return users ? JSON.parse(users) : [];
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (username.length < 3 || password.length < 6) {
            setError(isLoginMode ? 'Vui lòng nhập tài khoản/mật khẩu.' : 'Tên người dùng cần tối thiểu 3 ký tự, mật khẩu tối thiểu 6 ký tự.');
            return;
        }

        const users = loadUsers();

        if (isLoginMode) {
            // Logic Đăng nhập
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, role: 'user' }));
                setSuccess('Đăng nhập thành công! Chuyển về trang chủ...');
                setTimeout(() => navigate('/'), 1000);
            } else {
                setError('Sai tên người dùng hoặc mật khẩu.');
            }
        } else {
            // Logic Đăng ký
            if (users.find(u => u.username === username)) {
                setError('Tên người dùng này đã tồn tại.');
                return;
            }
            
            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('app_users', JSON.stringify(users));
            setSuccess('Đăng ký thành công! Vui lòng đăng nhập.');
            setTimeout(() => setIsLoginMode(true), 1000);
        }
    };

    const title = isLoginMode ? "ĐĂNG NHẬP KHÁCH HÀNG" : "ĐĂNG KÝ TÀI KHOẢN";

    return (
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FADADD' }}>
            <div style={{ maxWidth: '400px', width: '90%', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
                <h2 style={{ textAlign: 'center', color: '#183761', marginBottom: '20px' }}>{title}</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '12px', border: '1px solid #007bff', borderRadius: '5px', fontSize: '1em' }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '12px', border: '1px solid #007bff', borderRadius: '5px', fontSize: '1em' }}
                        required
                    />
                    
                    {error && <p style={{ color: '#dc3545', margin: 0, fontWeight: 'bold' }}>{error}</p>}
                    {success && <p style={{ color: '#28a745', margin: 0, fontWeight: 'bold' }}>{success}</p>}
                    
                    <button 
                        type="submit"
                        style={{ padding: '12px', backgroundColor: isLoginMode ? '#007bff' : '#183761', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1em' }}
                    >
                        {isLoginMode ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
                    </button>
                </form>

                <button 
                    type="button"
                    onClick={() => setIsLoginMode(!isLoginMode)}
                    style={{ marginTop: '15px', background: 'none', border: 'none', color: '#6c757d', cursor: 'pointer', textDecoration: 'underline' }}
                >
                    {isLoginMode ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
                </button>
            </div>
        </div>
    );
};

export default UserAuth;