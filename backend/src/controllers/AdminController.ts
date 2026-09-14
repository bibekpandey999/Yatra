import { Request, Response } from 'express';
import Admin from '../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TransportProvider } from '../models/TransportProvider';


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
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}

export const changeAdminPassword = async (req: Request, res: Response): Promise<Response> => {
    try {

        const adminId = req.user?.adminId;

        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const admin = await Admin.findById(adminId).select("+password");

        if (!admin) {
            return res.status.(404).json({
                message: "Admin not found",
                success: false
            })
        }
        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, admin.password);
        if (!isOldPasswordCorrect) {
            return res.status(400).json({
                message: "Old password is incorrect",
                success: false
            });
        }

        const isSamePassword = await bcrypt.compare(newPassword, admin.password);
        if (isSamePassword) {
            return res.status(400).json({
                message: "New password must be different from old password",
                success: false
            });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedNewPassword;

        await admin.save();

        return res.status(200).json({
            message: "Password changed successfully",
            success: true
        });



    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}

export const getAllTransportProviders = async (req: Request, res: Response): Promise<Response> => {
    try {
        const allTransportProviders = await TransportProvider.find().select('-password');
        return res.status(200).json({
            success: true,
            transporters: allTransportProviders
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}

export const getTransportProviderById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const transporterId = req.params.transporterId;
        const transporter = await TransportProvider.findById(transporterId);

        if (!transporter) {
            return res.status(404).json({
                success: false,
                message: "Transporter not found",
            });

        }

        return res.status(200).json({
            success: true,
            transporter
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }

}


export const verifyTransportProviderKYC = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const rejectTransportProviderKYC = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const deleteTransportProvider = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const unblockTransportProvider = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const blockTransportProvider = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const getPendingKYCProviders = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getBlockedTransportProviders = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllCustomers = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerById = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const blockCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const unblockCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerRideHistory = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllRides = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getRideById = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getActiveRides = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}




export const viewRideDetails = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const cancelRide = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCancelledRides = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCompletedRides = async (req: Request, res: Response): Promise<Response> => {
    try {

    } catch (err) {
        console.log(err)
    }
}

