import express from 'express';
import UserController from '../controllers/UserController.js';
const userRoutes = express.Router();


// Tạo tài khoản người dùng mới
userRoutes.post('/create', UserController.createUser);

// Đăng nhập
userRoutes.post('/login', UserController.loginUser);

// Đăng xuất
userRoutes.post('/logout', UserController.logoutUser);

export default userRoutes;