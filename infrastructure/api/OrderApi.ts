import { IOrderApi, UserOrder } from "../../core";
import { injectable } from "inversify";

@injectable()
class OrderApi implements IOrderApi {
    async fetchUserOrders(userId: number): Promise<UserOrder[]> {
        return Promise.resolve([
            {
                id: 1,
                userId,
                createdDate: "2012-04-23T18:25:43.511Z",
                purchases: [
                    {
                        id: 1,
                        userOrderId: 1,
                        productId: 1,
                        quantity: 2,
                        price: 140
                    }
                ],
                shippingAddress: {
                    street: "1234 Street Ln",
                    city: "Brandywine",
                    state: "New Hampshire",
                    zip: "03062"
                }
            }
        ]);
    }
}

export default OrderApi;