import express from 'express';
import UserController from '../controllers/UserController.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const userRoutes = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Tạo tài khoản người dùng mới
// Sử dụng các routes nehhh

// Endpoint để hiển thị form đăng ký
userRoutes.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

userRoutes.post('/create', UserController.createUser);

// Đăng nhập
userRoutes.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});
userRoutes.post('/login', UserController.loginUser);

// Lấy thông tin người dùng đã đăng nhập
userRoutes.get('/api/profile', UserController.getUserProfile);
userRoutes.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'profile.html'));
});

// // Đăng xuất
// userRoutes.post('/logout', UserController.logoutUser);

export default userRoutes;

