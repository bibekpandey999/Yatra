import { Request, Response } from 'express';
import Admin from '../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const registerCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { name, phone } = req.body;

        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!name || !phone || !adminPassword) {
            return res.status(400).json({
                message: " Required fields  are missing",
                success: false,
            })
        }

        const existingUser = await Admin.findOne({ phone });

        if (existingUser) {
            return res.status(409).json({
                message: "Admin with this phone number already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const admin = new Admin({
            name,
            phone,
            password: hashedPassword
        })

        await admin.save();

        return res.status(201).json({
            message: "Admin Created Successfuly !",
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

export const loginAdmin = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const admin = await Admin.findOne({ phone }).select('+password')

        if (!admin) {
            return res.status(400).json({
                message: "Invalid phone or password",
                success: false
            });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

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
            { adminId: admin._id, role: 'admin' },
            JWT_SECRET,
            { expiresIn: '7d' }
        )

        const adminData = {
            id: admin._id,
            name: admin.name,
            phone: admin.phone,
            role: "admin",
            profileImage: admin.profileImage?.url,
        }


        return res.status(200).cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        }).json({
            message: "Login successful",
            success: true,
            customer: adminData
        });


    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });

    }
}

export const logout = async (req: Request, res: Response): Promise<Response> => {
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

export const getAdminProfile = async (req: Request, res: Response): Promise<Response> => {

    try {
        const adminId = req.user?.adminId;
        const admin = await Admin.findById(adminId).select('-password');

        if (!admin) {
            return res.status(404).json({ message: "Admin not found", success: false });
        }
        return res.status(200).json({ success: true, admin });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}

export const updateAdminProfile = async (req: Request, res: Response): Promise<Response> => {
    try {

        const adminId = req.user?.adminId;
        const { name } = req.body;

        const admin = await Admin.findById(adminId);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found", success: false });
        }

        if (name) admin.name = name.trim();
        await admin.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            admin: {
                _id: admin._id,
                name: admin.name,
                phone: admin.phone,
                profileImage: admin.profileImage
            }
        })


    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}

export const changeAdminPassword = () => {
    try {
        
        
    } catch (err) {
        console.log(err)
    }

}

export const getAllTransportProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const getTransportProviderById = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const verifyTransportProviderKYC = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const rejectTransportProviderKYC = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const deleteTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const unblockTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const blockTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const getPendingKYCProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getBlockedTransportProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllCustomers = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerById = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const blockCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const unblockCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const deleteCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerRideHistory = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getRideById = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getActiveRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}




export const viewRideDetails = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const cancelRide = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCancelledRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCompletedRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

