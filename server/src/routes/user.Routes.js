import express from 'express'
import { userRegister, userLogin } from '../controllers/userController.js'

const router = express.Router()
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ChatApp',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});
const upload = multer({ storage: storage });
router.post('/register', upload.single('image'), userRegister)
router.post('/login', userLogin)

export default router