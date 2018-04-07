import { ICMSApi, ProductDetail, ProductReview } from "../../core";
import { injectable } from "inversify";

@injectable()
class CMSApi implements ICMSApi {
    async fetchProductDetail(productId: number): Promise<ProductDetail> {
        return Promise.resolve({
            id: 1,
            productId: productId,
            name: "Test Product",
            description: "This is a test product",
            details: "Test product is cool",
            warranty: "No warranty",
            images: [
                {
                    url: "http://mystore.com/images/12345.jpg",
                    isPrimary: false,
                },
                {
                    url: "http://mystore.com/images/67890.jpg",
                    isPrimary: true,
                }
            ]
        })
    }
    async fetchProductReviews(productId: number): Promise<ProductReview[]> {
        return Promise.resolve([
            {
                id: 1,
                productId: productId,
                userId: 1,
                rating: 4,
                description: "pretty good test product"
            },
            {
                id: 2,
                productId: productId + 1,
                userId: 2,
                rating: 2,
                description: "not good test product"
            }
        ])
    }
}

export default CMSApi;