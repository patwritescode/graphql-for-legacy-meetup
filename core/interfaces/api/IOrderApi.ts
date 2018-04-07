import { OrderAddress, UserOrder, UserPurchase } from "../../models";

export const IOrderApiType = Symbol.for("IOrderApiType");
interface IOrderApi {
    fetchUserOrders(userId: number): Promise<UserOrder[]>;
}

export default IOrderApi;