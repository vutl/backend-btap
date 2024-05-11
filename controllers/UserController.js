import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key_uwu';

const UserController = {
    // Tạo một người dùng mới
    async createUser(req, res) {
        try {
            const { username, password } = req.body;
            const existingUser = await UserModel.findOne({ username });
            if (existingUser) {
                return res.status(400).send({ message: 'Username already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            // Tạo một đối tượng user mới với các trường còn lại là ""
            const newUser = {
                username,
                passwordHash,
                full_name: "",
                date_of_birth: "",
                place_of_birth: "",
                nationality: "",
                education_history: "",
                work: 
                {
                    company_name: "",
                    start_date: "",
                    end_date: "",
                    role: "",
                    skills: [""],
                    projects: 
                    [{
                        project_name: "",
                        description: "",
                        start_date: "",
                        end_date: "",
                    },],
                },
                hobbies: [""],
                personal_goals: "",
            };
            await UserModel.create(newUser);
            res.redirect('/login');
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
    async loginUser (req, res) {
        try {
            const { username, password } = req.body;
            const user = await UserModel.findOne({ username: username });
            if (!user || !(bcrypt.compare(password, user.passwordHash))) {
                return res.status(401).send({ message: 'Invalid username or password' });
            }

            res.redirect('/profile');
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
    // Lấy thông tin người dùng đã đăng nhập
    async getUserProfile(req, res) {
        try {
            // Tìm người dùng trong cơ sở dữ liệu
            const {username} = req.body;
            const user = await UserModel.findOne(username);
            if (!user.username) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Trả về thông tin người dùng
            res.json({
                username: user.username,
                full_name: user.full_name || '',
                dateOfBirth: user.dateOfBirth || '',
                placeOfBirth: user.placeOfBirth || '',
                nationality: user.nationality || '',
                educationHistory: user.educationHistory || '',
                work: {
                    company_name: user.work.company_name || '',
                    start_date: user.work.start_date || '',
                    end_date: user.work.end_date || '',
                    role: user.work.role || '',
                    skills: user.work.skills || [''],
                    projects: user.work.projects || 
                    [{
                        project_name: user.work.projects.project_name || "",
                        description: user.work.projects.description || "",
                        start_date: user.work.projects.start_date || "",
                        end_date: user.work.projects.project_name || "",
                        _id: user.work.projects._id,
                    }]
                },
                hobbies: user.hobbies || [''],
                personal_goals: user.personal_goals || ''
            });
        } catch (error) {
            console.error('Error fetching user profile:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // // Lấy tất cả người dùng
    // async getAllUsers(req, res) {
    //     try {
    //         const users = await UserModel.find();
    //         res.status(200).json(users);
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

    // Lấy một người dùng theo ID
    // async getUserById(req, res) {
    //     try {
    //         const user = await UserModel.findById(req.params.id);
    //         const profile = await ProfileModel.findOne(req.params.id);
    //         const additionalInfo = await AdditionalInfoModel.findOne(req.params.id);
    //         const workExperience = await WorkModel.findOne(req.params.id);
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(200).json(user);
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
};

export default UserController;
