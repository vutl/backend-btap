import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import path from 'path';

// mongoose.connect('mongodb+srv://btap:hehehehe@btap.wqdsi5z.mongodb.net/btap@btap.wqdsi5z.mongodb.net/?retryWrites=true&w=majority&appName=btap', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
mongoose.connect('mongodb+srv://btap:hehehehe@btap.wqdsi5z.mongodb.net/?retryWrites=true&w=majority&appName=btap')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
// Sử dụng body-parser để lấy dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Homepage - Create or Login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create_or_login.html'));
});

app.use('/', userRoutes);


// Logout
app.get('/logout', (req, res) => {
    // Clear session or any authentication mechanism
    res.redirect('/logout-success');
});

// Logout Success Page
app.get('/logout-success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout_success.html'));
});

// // Endpoint để lấy thông tin users
// app.get('/api/users', (req, res) => {
//     const users = readUsersFromFile();
//     res.json(users);
// });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});


// // mongodb+srv://btap:hehehe
// // @btap.wqdsi5z.mongodb.net/?retryWrites=true&w=majority&appName=btap
// // 663c5b5fa60677a6552b20ec
//token for vutl: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZ1dGwiLCJpYXQiOjE3MTUzNzA3Nzl9.LzHlMlMY--2STo1wweOV9AFqqYrOKvUzJZ49iiNAk_U