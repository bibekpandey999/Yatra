import Customer from '../models/Customer'
import bcrypt from 'bcryptjs'
import mongoose  from 'mongoose';
import jwt from 'jsonwebtoken'

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

