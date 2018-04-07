import {
    IProductService,
    ProductDetail,
    ProductInventory,
    IProductInventoryLoader,
    IProductInventoryLoaderType,
    IProductDetailLoaderType,
    IProductDetailLoader
} from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ProductService implements IProductService {
    @inject(IProductDetailLoaderType)
    private readonly productDetailLoader: IProductDetailLoader;
    @inject(IProductInventoryLoaderType)
    private readonly productInventoryLoader: IProductInventoryLoader;

    async fetchDetails(productId: number): Promise<ProductDetail> {
        return this.productDetailLoader.load(productId);
    }

    async fetchInventory(productId: number): Promise<ProductInventory> {
        return this.productInventoryLoader.load(productId);
    }
}

export default ProductService;