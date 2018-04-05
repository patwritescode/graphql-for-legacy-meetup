import { AuthResult } from "../../models";

export const AuthApiType = Symbol.for("IAuthApi");
export interface IAuthApi {
    signIn(username: string, password: string): AuthResult
}