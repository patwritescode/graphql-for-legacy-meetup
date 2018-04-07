import DataLoader from "dataloader";
import { IProductReviewsLoader, ProductReview, ICMSApi, ICMSApiType } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ProductReviewsLoader extends DataLoader<number, ProductReview[]> implements IProductReviewsLoader {
    constructor(
        @inject(ICMSApiType) cmsApi: ICMSApi
    ) {
        const batch = async (keys: number[]) => {
            const results: ProductReview[][] = [];
            for(const key of keys) {
                const result = await cmsApi.fetchProductReviews(key);
                results.push(result);
            }
            return results;
        }
        super(batch);
    }
}

export default ProductReviewsLoader;
