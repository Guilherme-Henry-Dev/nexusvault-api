import { Request, Response, NextFunction } from "express";
import { jwt } from "jsonwebtoken";

export function authGuard(req: Request, res: Response, next: NextFunction){
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({error: "Not token"});
        const [, token] = auth.split(' ');
    try{
        const playload = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).userId = (playload as any).sub;
        next();        
    }catch{
        return res.status(401).json({error: "Invalid token"})
    }
}