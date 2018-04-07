import { ProductReview, IContextProvider } from "../../core";

export default {
    Review: {
        name: async (parent: ProductReview, args, context: IContextProvider) => {
            return context.userService.fetchFullName(parent.userId);
        }
    }
}