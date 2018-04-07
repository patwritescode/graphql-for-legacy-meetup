import { IContextProvider, IProductServiceType, IProductService } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ContextProvider implements IContextProvider {
    @inject(IProductServiceType)
    public readonly productService: IProductService;
}

export default ContextProvider;