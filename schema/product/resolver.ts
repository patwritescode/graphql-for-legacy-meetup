import { ProductInventory, IContextProvider } from "../../core";

export default {
    Product: {
        id: async (parent: ProductInventory, args, context: IContextProvider) => {
            return parent.productId;
        },
        name: async (parent: ProductInventory, args, context: IContextProvider) => {
            return context.productService
                .fetchDetails(parent.productId)
                .then(result => result !== null ? result.name : null);
        },
        description: async (parent: ProductInventory, args, context: IContextProvider) => {
            return context.productService
                .fetchDetails(parent.productId)
                .then(result => result !== null ? result.description : null);
        },
        details: async (parent: ProductInventory, args, context: IContextProvider) => {
            return context.productService
                .fetchDetails(parent.productId)
                .then(result => result !== null ? result.details : null);
        },
        rating: async (parent: ProductInventory, args, context: IContextProvider) => {
            return context.productService.fetchRating(parent.productId);
        },
        reviews: async (parent: ProductInventory, args, context: IContextProvider) => {
            return context.productService.fetchReviews(parent.productId);
        }
    }
}