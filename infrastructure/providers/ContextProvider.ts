import { IContextProvider, IProductServiceType, IProductService, IUserServiceType, IUserService } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ContextProvider implements IContextProvider {
    @inject(IProductServiceType)
    public readonly productService: IProductService;
    @inject(IUserServiceType)
    public readonly userService: IUserService;
}

export default ContextProvider;