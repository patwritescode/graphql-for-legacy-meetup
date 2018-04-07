import { IProductInventoryLoader, ProductInventory, IWebApiType, IWebApi } from "../../core";
import { injectable, inject } from "inversify";
import DataLoader from "dataloader";

@injectable()
class ProductInventoryLoader extends DataLoader<number, ProductInventory> implements IProductInventoryLoader {
    constructor(
        @inject(IWebApiType) webApi: IWebApi
    ) {
        const batch = async(keys: number[]) => {
            const result = await webApi.fetchProductInventory(keys);
            return keys.map(key => result.find(product => product.productId === key));
        }
        super(batch);
    }
}

export default ProductInventoryLoader;