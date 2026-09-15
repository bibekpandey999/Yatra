
declare global {
    namespace Express {
        interface Request {
            user?: {
                adminId?: string;
                customerId?: string;
                transporterId?: string;
                role: "admin" | "customer" | "transporter";
            };
        }
    }
}


export {};