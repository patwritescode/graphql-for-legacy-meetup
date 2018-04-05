import { User, IUserApi } from "../../core";
import { injectable } from "inversify";

@injectable()
class UserApi implements IUserApi {
    getUser(username: string): User {
        throw new Error("Method not implemented.");
    }
}

export default UserApi;