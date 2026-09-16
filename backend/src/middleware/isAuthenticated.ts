import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";

type UserPayload = JwtPayload & {
    adminId?: string;
    customerId?: string;
    transporterId?: string;
    role: "admin" | "customer" | "transporter";
};

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: no token provided",
                success: false
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        if (typeof decoded == "string") {
            return res.status(401).json({
                message: "invalide token",
                success: false
            })
        }

        const user = decoded as UserPayload;
        req.user = user;

        next();

    } catch (err) {
        console.error('Authentication error:', err);
        return res.status(401).json({
            message: 'Authentication failed',
            success: false
        });
    }
}

export default isAuthenticated;