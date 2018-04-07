import { ProductReview, ProductDetail, ProductInventory } from "../../models";

export const IProductServiceType = Symbol.for("IProductService");
interface IProductService {
    fetchDetails(productId: number): Promise<ProductDetail>;
    fetchInventory(productId: number): Promise<ProductInventory>;
    fetchRating(productId: number): Promise<number>;
    fetchReviews(productId: number): Promise<ProductReview[]>;
}

export default IProductService;