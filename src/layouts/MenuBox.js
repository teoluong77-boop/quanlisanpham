import React from 'react';

const MenuBox = () => {
    return (
        <div className="box_menu">
            <nav id="menu" className="menu">
                <ul 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        width: '100%', 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: 0 
                    }}
                >
                    {/* Mục 1: Sản phẩm (Các đường dẫn thực tế đến danh mục) */}
                    <li className="icon_menu active">
                        <a href="https://cellphones.com.vn/mobile.html" target="_blank" rel="noopener noreferrer" title="Danh mục Sản phẩm">Sản phẩm</a>
                        <ul>
                            <div className="container_main">
                                {/* Phân loại theo Hãng */}
                                <li><a href="https://cellphones.com.vn/mobile/apple.html" target="_blank" rel="noopener noreferrer" title="Apple (iPhone)"><i className="far fa-angle-right"></i> Apple (iPhone)</a></li>
                                <li><a href="https://cellphones.com.vn/mobile/samsung.html" target="_blank" rel="noopener noreferrer" title="Samsung Galaxy"><i className="far fa-angle-right"></i> Samsung</a></li>
                                <li><a href="https://cellphones.com.vn/mobile/xiaomi.html" target="_blank" rel="noopener noreferrer" title="Xiaomi"><i className="far fa-angle-right"></i> Xiaomi</a></li>
                                <li><a href="https://cellphones.com.vn/mobile/oppo.html" target="_blank" rel="noopener noreferrer" title="Oppo"><i className="far fa-angle-right"></i> Oppo</a></li>
                                <li><a href="https://cellphones.com.vn/phu-kien.html" target="_blank" rel="noopener noreferrer" title="Phụ kiện & Thiết bị"><i className="far fa-angle-right"></i> Phụ kiện & Thiết bị</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* Mục 2: Quản lý Kho/Bán hàng (Giữ nguyên các Route nội bộ cho mục đích tiểu luận) */}
                    <li className="icon_menu">
                        {/* Đường dẫn nội bộ để kích hoạt ProtectedRoute trong App.tsx */}
                        <a href="/ManageProducts" title="Công cụ Quản lý">Quản lý Kho/Bán hàng</a> 
                        <ul>
                            <div className="container_main">
                                {/* Các chức năng CRUD và báo cáo (Link nội bộ) */}
                                <li><a href="/quan-ly-ton-kho-demo" title="Quản lý tồn kho"><i className="far fa-angle-right"></i> Quản lý Tồn kho</a></li>
                                <li><a href="/ManageProducts" title="Thêm/Sửa Sản phẩm"><i className="far fa-angle-right"></i> Thêm/Sửa Sản phẩm</a></li>
                                <li><a href="/quan-ly-don-hang-demo" title="Quản lý đơn hàng"><i className="far fa-angle-right"></i> Quản lý Đơn hàng</a></li>
                                <li><a href="/bao-cao-doanh-thu-demo" title="Báo cáo doanh thu"><i className="far fa-angle-right"></i> Báo cáo & Thống kê</a></li>
                            </div>
                        </ul>
                    </li>
                    
                    {/* Mục 3: Dịch vụ & Hỗ trợ (Các đường dẫn thực tế) */}
                    <li className="icon_menu">
                        <a href="https://cellphones.com.vn/sforum/thu-thuat" target="_blank" rel="noopener noreferrer" title="Dịch vụ Hỗ trợ">Dịch vụ & Hỗ trợ</a>
                        <ul>
                            <div className="container_main">
                                <li><a href="https://cellphones.com.vn/chinh-sach-bao-hanh-sua-chua" target="_blank" rel="noopener noreferrer" title="Chính sách bảo hành"><i className="far fa-angle-right"></i> Chính sách Bảo hành</a></li>
                                <li><a href="https://cellphones.com.vn/dich-vu-sua-chua" target="_blank" rel="noopener noreferrer" title="Trung tâm Sửa chữa"><i className="far fa-angle-right"></i> Trung tâm Sửa chữa</a></li>
                                <li><a href="https://cellphones.com.vn/huong-dan-mua-hang-online" target="_blank" rel="noopener noreferrer" title="Hướng dẫn mua hàng"><i className="far fa-angle-right"></i> Hướng dẫn Mua hàng</a></li>
                            </div>
                        </ul>
                    </li>

                    {/* Mục 4: Tin tức Công nghệ (Các đường dẫn thực tế) */}
                    <li className="icon_menu">
                        <a href="https://cellphones.com.vn/sforum/tin-cong-nghe" target="_blank" rel="noopener noreferrer" title="Tin tức công nghệ">Tin tức Công nghệ</a>
                        <ul>
                            <div className="container_main">
                                <li><a href="https://cellphones.com.vn/sforum/danh-gia" target="_blank" rel="noopener noreferrer" title="Đánh giá sản phẩm mới"><i className="far fa-angle-right"></i> Đánh giá Sản phẩm mới</a></li>
                                <li><a href="https://cellphones.com.vn/sforum/khuyen-mai-soc" target="_blank" rel="noopener noreferrer" title="Khuyến mãi & Sự kiện"><i className="far fa-angle-right"></i> Khuyến mãi & Sự kiện</a></li>
                            </div>
                        </ul>
                    </li>
                    
                    {/* Mục 5: Tuyển dụng (Đường dẫn thực tế) */}
                    <li className="icon_menu">
                        <a href="https://tuyendung.cellphones.com.vn/" target="_blank" rel="noopener noreferrer" title="Tuyển Dụng - Việc Làm">Tuyển Dụng</a>
                        <ul>
                            <div className="container_main">
                                <li><a href="https://tuyendung.cellphones.com.vn/viec-lam/1" target="_blank" rel="noopener noreferrer" title="Vị trí tại Cửa hàng"><i className="far fa-angle-right"></i> Vị trí tại Cửa hàng</a></li> 
								<li><a href="https://tuyendung.cellphones.com.vn/viec-lam/2" target="_blank" rel="noopener noreferrer" title="Vị trí tại Văn Phòng"><i className="far fa-angle-right"></i> Vị trí tại Văn Phòng</a></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuBox;                                                                                                                                                                                                                                                                                                