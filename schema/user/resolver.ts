import { User, IContextProvider } from "../../core";

export default {
    User: {
        fullName: (parent: User, args, context: IContextProvider) => {
            return `${parent.firstName} ${parent.lastName}`;
        },
        purchases: async (parent: User, args, context: IContextProvider) => {
            return context.purchaseService.findByUser(parent.id);
        }
    }
}