import { ProductInventory, User, UserAuthentication } from "../../models"

export const IWebApiType = Symbol.for("IWebApiType");
interface IWebApi {
    fetchProductInventory(id: number[]): Promise<ProductInventory[]>;
    fetchUser(id: number): Promise<User>;
    login(username: string, password: string): Promise<UserAuthentication>;
}

export default IWebApi;