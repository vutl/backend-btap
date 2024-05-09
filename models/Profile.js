import mongoose from 'mongoose';
import Collections from '../database/collection.js' 

const profileSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    place_of_birth: { type: String, required: true },
    nationality: { type: String, required: true },
    education_history: { type: String, required: true }
});

const ProfileModel = mongoose.model(Collections.PROFILE, profileSchema);
export default ProfileModel;
