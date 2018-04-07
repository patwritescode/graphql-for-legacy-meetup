import { IWebApi, UserAuthentication, ProductInventory, User } from "../../core";
import { injectable } from "inversify";

@injectable()
class WebApi implements IWebApi {
    async fetchProductInventory(productIds: number[]): Promise<ProductInventory[]> {
        return Promise.resolve(
            productIds.map((productId, index) => ({
                id: index,
                productId,
                total: 1234,
                available: 123,
                price: 70,
                salePrice: 70,
                onSale: false,
            }))
        );
    }
    async fetchUser(id: number): Promise<User> {
        return Promise.resolve({
            id,
            firstName: "Test",
            lastName: "User",
            email: "test@test.com",
            username: "test"
        });
    }
    async login(username: string, password: string): Promise<UserAuthentication> {
        return Promise.resolve({
            token: "test_token",
            expires: null,
            user: await this.fetchUser(1)
        })
    }
}

export default WebApi;