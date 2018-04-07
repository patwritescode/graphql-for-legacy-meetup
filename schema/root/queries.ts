import { IContextProvider } from "../../core";

export default {
    Query: {
        product: async (obj, { id }, context: IContextProvider) => {
            return context.productService.fetchInventory(id);
        }
    }
}