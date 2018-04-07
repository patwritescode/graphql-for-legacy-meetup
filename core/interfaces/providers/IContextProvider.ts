import { IProductService, IUserService } from "../services";

export const IContextProviderType = Symbol.for("IContextProvider");
interface IContextProvider {
    productService: IProductService;
    userService: IUserService;
}

export default IContextProvider;