declare global {
    namespace Express {
        interface Request {
            user?: {
                adminId: string;
                role: string;
            };
        }
    }
}

export {};