import { IJwtPayload } from './jwt-payload.interface';
import { Request } from 'express';
import { IAuthService } from 'src/common/interfaces/iservices/auth.service.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: IAuthService);
    validate(req: Request, payload: IJwtPayload): Promise<any>;
}
export {};
