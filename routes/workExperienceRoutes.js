import express from 'express';
import WorkExperienceController from '../controllers/WorkExperienceController.js';
import authenticate from '../middlewares/authMiddleware.js';
const workExperienceRoutes = express.Router();


// Middleware xác thực token và lấy profile_id từ token
workExperienceRoutes.use(authenticate);

// Tạo mới kinh nghiệm làm việc
workExperienceRoutes.post('/create', WorkExperienceController.createWorkExperience);

// Lấy thông tin kinh nghiệm làm việc của người dùng
workExperienceRoutes.get('/', WorkExperienceController.getWorkExperience);

// Cập nhật thông tin kinh nghiệm làm việc của người dùng
workExperienceRoutes.put('/:id', WorkExperienceController.updateWorkExperience);

export default workExperienceRoutes;