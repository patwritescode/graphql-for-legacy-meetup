import { IContextProvider } from "../../core";

export default {
    Mutation: {
        login: async (parent, { username, password }, context: IContextProvider) => {
            return context.authService.login(username, password);
        }
    }
}