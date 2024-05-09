import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import workExperienceRoutes from './routes/workExperienceRoutes.js';
import additionalInfoRoutes from './routes/additionalInfoRoutes.js';

// Kết nối MongoDB Atlas
mongoose.connect('mongodb+srv://btap:hehehehe@btap.wqdsi5z.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

const app = express();

app.use(express.json());

// Sử dụng các routes nehhh
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/work-experiences', workExperienceRoutes);
app.use('/api/additional-infos', additionalInfoRoutes);

app.listen(8080, () => console.log(`Server is running on port ${8080}`));

// mongodb+srv://btap:hehehe
// @btap.wqdsi5z.mongodb.net/?retryWrites=true&w=majority&appName=btap
// 663c5b5fa60677a6552b20ec
