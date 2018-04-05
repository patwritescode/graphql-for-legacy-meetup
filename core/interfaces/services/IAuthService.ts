import { AuthResult } from "../../models";

export const AuthServiceType = Symbol.for("IAuthService");
export interface IAuthService {
    login(username: string, password: string): Promise<AuthResult>;
}