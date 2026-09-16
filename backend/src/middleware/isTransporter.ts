import type { NextFunction, Request, Response } from "express";


const isTransporter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user?.role !== "transporter") {
            return res.status(403).json({
                message: "you can access with current role",
                success: false,
            });
        }
        next();

    } catch (err) {
        console.error('Authentication error:', err);
        return res.status(401).json({
            message: 'Authentication failed',
            success: false
        });
    }
}

export default isTransporter;