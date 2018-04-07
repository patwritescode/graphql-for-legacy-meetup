import { ProductDetail, ProductReview } from "../../models";

export const ICMSApiType = Symbol.for("ICmsApiType");

interface ICMSApi {
    fetchProductDetail(productId: number): Promise<ProductDetail>;
    fetchProductReviews(productId: number): Promise<ProductReview[]>;
}

export default ICMSApi;