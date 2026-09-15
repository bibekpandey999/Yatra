import { Request, Response } from 'express';
import Customer from '../models/Customer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TransportProvider } from '../models/TransportProvider';


const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


export const registerCustomer = async (req: Request, res: Response) => {
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
                message: "User with this phone number already exists",
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


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const customer = await Customer.findOne({ phone }).select('+password')

        if (!customer) {
            return res.status(400).json({
                message: "Invalid phone or password",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, customer.password);

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
            { customerId: customer._id, role: 'customer' },
            JWT_SECRET,
            { expiresIn: '7d' }
        )

        const customerData = {
            id: customer._id,
            name: customer.name,
            phone: customer.phone,
            role: "customer",
            profileImage: customer.profileImage?.url,
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


export const changeCustomerPassword = async (req: Request, res: Response): Promise<Response> => {
    try {

        const customerId = req.user?.customerId;

        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const customer = await Customer.findById(customerId).select("+password");

        if (!customer) {
            return res.status(404).json({
                message: "Admin not found",
                success: false
            })
        }
        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, customer.password);
        if (!isOldPasswordCorrect) {
            return res.status(400).json({
                message: "Old password is incorrect",
                success: false
            });
        }

        const isSamePassword = await bcrypt.compare(newPassword, customer.password);
        if (isSamePassword) {
            return res.status(400).json({
                message: "New password must be different from old password",
                success: false
            });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        customer.password = hashedNewPassword;

        await customer.save();

        return res.status(200).json({
            message: "Password changed successfully",
            success: true
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}


export const updateAdminProfile = async (req: Request, res: Response): Promise<Response> => {
    try {

        const customerId = req.user?.customerId;
        const { name } = req.body;

        const customer = await Customer.findById(customerId);

        if (!customer) {
            return res.status(404).json({ message: "Admin not found", success: false });
        }

        if (name) customer.name = name.trim();
        await customer.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            customer: {
                _id: customer._id,
                name: customer.name,
                phone: customer.phone,
                profileImage: customer.profileImage
            }
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}


export const requestRide = async (req: Request, res: Response): Promise<Response> => {
    try {
        const customerId = req.user?.customerId;
        const transporterId = req.params.transporterId;


        const { pickupLocation, dropoffLocation, passendgerCount} = req.body;

        



        const transporter = await TransportProvider.findById(transporterId).select("-password");
        if (!transporter) {
            return res.status(404).json({
                messsage: "Transporter not found !",
                success: false
            })
        }

        const vehicleType = transporter.vehicle?.type;

        if (!transporter.isAvailable) {
            return res.status(404).json({
                messsage: "Transporter is not available !",
                success: false
            })
        }



    } catch (err) {

    }
}


export const getPriceEstimate = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}


export const cancelRideRequest = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}

export const getRideRequestStatus = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}

export const getMatchedTransporter = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}


export const getCurrentRide = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}


export const cancelRide = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}

export const getRideStatus = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {

    }
}