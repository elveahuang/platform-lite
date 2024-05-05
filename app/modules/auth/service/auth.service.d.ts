import { Principal } from '@/commons/security/principal';
import { R } from '@/commons/web/response';
import { CredentialsDto } from '@/modules/auth/dto/credentials.dto';
import { JwtPayload, JwtResponse } from '@/modules/auth/passport/jwt.type';
import { UserSessionService } from '@/modules/core/service/user-session.service';
import { UserService } from '@/modules/core/service/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private configService;
    private userSessionService;
    private userService;
    constructor(jwtService: JwtService, configService: ConfigService, userSessionService: UserSessionService, userService: UserService);
    createAccessToken(payload: JwtPayload): string;
    createRefreshToken(payload: JwtPayload): string;
    hasAnyRoles(principal: Principal, roles: string[] | string): boolean;
    hasAnyAuthorities(principal: Principal, authorities: string[] | string): boolean;
    validate(accessToken: string): Promise<Principal>;
    auth(credentials: CredentialsDto): Promise<R<JwtResponse>>;
}
