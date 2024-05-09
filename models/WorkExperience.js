import mongoose from 'mongoose';
import Collections from '../database/collection.js' 

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    start_date: { type: String, required: true },
    end_date: { type: String }
});

const workExperienceSchema = new mongoose.Schema({
    profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    start_date: { type: String, required: true },
    end_date: { type: String },
    company_name: { type: String, required: true },
    role: { type: String, required: true },
    skills: [{ type: String }],
    projects: [projectSchema]
});

const WorkModel = mongoose.model(Collections.WORK_EXPERIENCE, workExperienceSchema);
export default WorkModel;
