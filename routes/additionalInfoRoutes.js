import express from 'express';
import AdditionalInfoController from '../controllers/AdditionalInfoController.js';
import authenticate from '../middlewares/authMiddleware.js';
const additionalInfoRoutes = express.Router();


// Middleware xác thực token và lấy profile_id từ token
additionalInfoRoutes.use(authenticate);

// Tạo mới thông tin bổ sung
additionalInfoRoutes.post('/create', AdditionalInfoController.createAdditionalInfo);

// Lấy thông tin bổ sung của người dùng
additionalInfoRoutes.get('/', AdditionalInfoController.getAdditionalInfo);

// Cập nhật thông tin bổ sung của người dùng
additionalInfoRoutes.put('/:id', AdditionalInfoController.updateAdditionalInfo);

export default additionalInfoRoutes;