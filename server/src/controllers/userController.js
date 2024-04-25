import bcrypt from 'bcrypt'
import User from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js"

export const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const path = req.file
        if (!name || !email || !password) {
            return res.status(401).send.json({
                success: false,
                message: 'Please Fill All Details'
            })
        }
        const existsUser = await User.findOne({ email })
        if (existsUser) {
            return res.status(402).send({
                code: 402,
                success: false,
                message: 'User Already Exists'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword, image: path })
        await user.save()
        return res.status(201).send({
            code: 201,
            success: true,
            message: 'User Created Successfully',
            user,
            token: generateToken(user._id)
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error While Register User',
            error
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: 'Please fill All Details'
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(402).send({
                success: false,
                message: 'User not Exists'
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(403).send({
                success: false,
                message: 'Invalid Email or Password'
            })
        }
        return res.status(201).send({
            success: true,
            message: 'Login Success',
            user,
            token: generateToken(user._id)
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error While Login',
            error
        })
    }
}