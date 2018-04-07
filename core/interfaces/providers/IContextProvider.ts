import { IProductService} from "../services";

export const IContextProviderType = Symbol.for("IContextProvider");
interface IContextProvider {
    productService: IProductService;
}

export default IContextProvider;