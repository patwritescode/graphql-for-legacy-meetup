import UserPurchase from "./UserPurchase";
import OrderAddress from "./OrderAddress";

interface UserOrder {
    id: number;
    userId: number;
    createdDate: string;
    purchases: UserPurchase[];
    shippingAddress: OrderAddress;
}

export default UserOrder;