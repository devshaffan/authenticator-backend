import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ResponseInterceptor implements NestInterceptor {
    private readonly reflector;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    errorHandler: (error: any) => never;
}
