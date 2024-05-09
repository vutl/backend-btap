import mongoose from 'mongoose';
import Collections from '../database/collection.js' 

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }
});

const UserModel = mongoose.model(Collections.USER, userSchema);
export default UserModel;
