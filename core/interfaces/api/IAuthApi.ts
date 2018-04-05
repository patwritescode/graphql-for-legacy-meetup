import { AuthResult } from "../../models";

export const AuthApiType = Symbol.for("IAuthApi");
interface IAuthApi {
    signIn(username: string, password: string): AuthResult
}

export default IAuthApi;