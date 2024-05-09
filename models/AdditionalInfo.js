import mongoose from 'mongoose';
import Collections from '../database/collection.js' 

const additionalInfoSchema = new mongoose.Schema({
    hobbies: [{ type: String }],
    personal_goals: { type: String }
});

const AdditionalInfoModel = mongoose.model(Collections.ADDITIONAL_INFO, additionalInfoSchema);
export default AdditionalInfoModel;
