
import { TransportProvider } from '../models/TransportProvider'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express";

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const registerTransporter = async (req: Request, res: Response) => {
    try {

        const { name, phone, password } = req.body;

        if (!name || !phone || !password) {
            return res.status(400).json({
                message: "All required fields must be provided",
                success: false,
            })
        }

        const existingUser = await TransportProvider.findOne({ phone });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this phone number already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new TransportProvider({
            name,
            phone,
            hashedPassword
        })

        await newUser.save();

        return res.status(201).json({
            message: "Transporter Created Successfuly !",
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


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const transporter = await TransportProvider.findOne({ phone }).select('+password')

        if (!transporter) {
            return res.status(400).json({
                message: "Invalid phone or password",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, transporter.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid Phone or password",
                success: false
            });
        }

        const JWT_SECRET = process.env.JWT_SECRET;

        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign(
            { customerId: transporter._id, role: 'customer' },
            JWT_SECRET,
            { expiresIn: '7d' }
        )

        const customerData = {
            id: transporter._id,
            name: transporter.name,
            phone: transporter.phone,
            role: "customer",
            profileImage: transporter.profileImage?.url,
        }


        return res.status(200).cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        }).json({
            message: "Login successful",
            success: true,
            customer: customerData
        });


    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });

    }
}


export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: "/"
        });

        return res.status(200).json({
            message: "Logged out successfully!",
            success: true
        });

    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
}


export const submitKyc = async (req: Request, res: Response): Promise<Response> => {
    try {

        const transporterId = req.user?.transporterId;
        const { citizenshipCard, drivingLicense, vehicleRegistration, vehiclePhoto } = req.files || {};
        let { vehicleType, numberPlate, capacityKg, serviceAreas, pricePerKm } = req.body;

        if (!citizenshipCard || !drivingLicense || vehicleRegistration || !vehiclePhoto || !vehicleType || !numberPlate || !capacityKg || !pricePerKm) {
            return res.status(400).json({
                success: false,
                message: " All fields are required"
            })
        }

        if (typeof (serviceAreas) === "string") {
            serviceAreas = serviceAreas.split(',').map((area) => area.trim()).filter(area => area.length > 3);
        }

        const transporter = await TransportProvider.findById(transporterId).select('-password');

        if (!transporter) {
            return res.status(404).json({
                success: false,
                message: "Transport provider not found"
            });
        }

        if (transporter.isKycCompleted) {
            return res.status(400).json({
                success: false,
                message: "KYC already submitted"
            });
        }

        transporter.documents = {
            citizenshipCard: citizenshipCard[0].path,
            drivingLicense: drivingLicense[0].path,
            vehicleRegistration: vehicleRegistration[0].path,
        }

        transporter.vehicle = {
            type: vehicleType,
            numberPlate,
            capacityKg,
            vehiclePhoto: vehiclePhoto[0].path
        };

        transporter.serviceAreas = serviceAreas || [];
        transporter.pricePerKm = pricePerKm;


        transporter.isKycCompleted = true;
        transporter.verificationStatus = "pending";
        transporter.isVerified = false;
        transporter.isKycDataSubmitted = true;

        await transporter.save();

        return res.status(200).json({
            status: 200,
            message:"KYC submitted successfully !"
        })



    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
}