import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String,require: true, unique: true },
    passwordHash: { type: String },
    full_name: { type: String },
    date_of_birth: { type: String },
    place_of_birth: { type: String },
    nationality: { type: String },
    education_history: { type: String },
    work: 
    {
        company_name: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        role: { type: String },
        skills: [{ type: String }],
        projects: 
        [{
            project_name: { type: String },
            description: { type: String },
            start_date: { type: String },
            end_date: { type: String },
        }],
    },
    hobbies: [{ type: String }],
    personal_goals: { type: String }
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
