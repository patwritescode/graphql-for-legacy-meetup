import { IAuthApi, AuthResult } from "../../core";
import { injectable } from "inversify";

@injectable()
class AuthApi implements IAuthApi {
    signIn(username: string, password: string): AuthResult {
        throw new Error("Method not implemented.");
    }
}

export default AuthApi;