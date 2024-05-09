import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

const SECRET_KEY = 'your_secret_key_uwu';

const UserController = {
    createUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const existingUser = await UserModel.findOne({ username });
            if (existingUser) {
                return res.status(400).send({ message: 'Username already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            await UserModel.create({ username, passwordHash });
            res.status(201).send({ message: 'User created successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
    
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await UserModel.findOne({ username });
            if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
                return res.status(401).send({ message: 'Invalid username or password' });
            }
            const token = jwt.sign({ username: user.username }, SECRET_KEY);
            res.json({ token });
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
    logoutUser: async (req, res) => {
        try {
            // Clear user token luonn
            res.status(200).send({ message: 'User logged out successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
}

export default UserController;