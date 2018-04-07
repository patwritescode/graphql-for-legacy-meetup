import { ICMSApi, IProductDetailLoader, ProductDetail, ICMSApiType } from "../../core";
import DataLoader from "dataloader";
import { injectable, inject } from "inversify";

@injectable()
class ProductDetailLoader extends DataLoader<number, ProductDetail> implements IProductDetailLoader {
    constructor(
        @inject(ICMSApiType) cmsApi: ICMSApi
    ) {
        const batch = async(keys: number[]) => {
            const results: ProductDetail[] = [];
            for(const key of keys) {
                const result = await cmsApi.fetchProductDetail(key);
                results.push(result);
            }
            return results;
        }
        super(batch);
    }
}

export default ProductDetailLoader;