import type { NextFunction, Request, Response } from "express";


const isCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user?.role !== "customer") {
            return res.status(403).json({
                message: "you do not have access",
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

export default isCustomer;