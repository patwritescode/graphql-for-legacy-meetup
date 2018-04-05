import { AuthResult, IAuthService, AuthApiType, IAuthApi, UserApiType, IUserApi } from "../../core";
import { inject, injectable } from "inversify";

@injectable()
class AuthService implements IAuthService {
    @inject(AuthApiType)
    private readonly authApi: IAuthApi;

    async login(username: string, password: string): Promise<AuthResult> {
        return this.authApi.signIn(username, password);
    }
}

export default AuthService;