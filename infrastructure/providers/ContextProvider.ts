import { IContextProvider, AuthServiceType, IAuthService } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ContextProvider implements IContextProvider {
    @inject(AuthServiceType)
    public readonly authService: IAuthService;
}

export default ContextProvider;