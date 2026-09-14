import Customer from '../models/Customer'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'


const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const registerCustomer = async (req, res) => {
    try {

        const { name, phone, password } = req.body;

        if (!name || !phone || !password) {
            return res.status(400).json({
                message: "All required fields must be provided",
                success: false,
            })
        }

        const existingUser = await Customer.findOne({ phone });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Customer({
            name,
            phone,
            hashedPassword
        })

        await newUser.save();

        return res.status(201).json({
            message: "User Created Successfuly !",
            success: true
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }

}