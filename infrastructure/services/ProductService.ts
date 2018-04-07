import {
    IProductService,
    ProductDetail,
    ProductInventory,
    IProductInventoryLoader,
    IProductInventoryLoaderType,
    IProductDetailLoaderType,
    IProductDetailLoader,
    IProductReviewsLoaderType,
    IProductReviewsLoader,
    ProductReview
} from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class ProductService implements IProductService {
    @inject(IProductDetailLoaderType)
    private readonly productDetailLoader: IProductDetailLoader;

    @inject(IProductInventoryLoaderType)
    private readonly productInventoryLoader: IProductInventoryLoader;

    @inject(IProductReviewsLoaderType)
    private readonly productReviewsLoader: IProductReviewsLoader;

    async fetchDetails(productId: number): Promise<ProductDetail> {
        return this.productDetailLoader.load(productId);
    }

    async fetchInventory(productId: number): Promise<ProductInventory> {
        return this.productInventoryLoader.load(productId);
    }

    async fetchRating(productId: number): Promise<number> {
        const reviews = await this.productReviewsLoader.load(productId);
        return reviews.reduce((a,b) => a + b.rating, 0) / reviews.length;
    }

    async fetchReviews(productId: number): Promise<ProductReview[]> { 
        return this.productReviewsLoader.load(productId);
    }
}

export default ProductService;