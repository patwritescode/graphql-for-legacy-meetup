import { ProductInventory, User } from "../../models"

export const IWebApiType = Symbol.for("IWebApiType");
interface IWebApi {
    fetchProductInventory(id: number[]): Promise<ProductInventory[]>;
    fetchUser(id: number): Promise<User>;
}

export default IWebApi;