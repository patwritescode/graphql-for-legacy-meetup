import { IUserService, User, IUserLoaderType, IUserLoader } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class UserService implements IUserService {
    @inject(IUserLoaderType)
    private readonly userLoader: IUserLoader;

    async fetchUser(id: number): Promise<User> {
        return this.userLoader.load(id);
    }

    async fetchFullName(userId: number): Promise<string> {
        const user = await this.userLoader.load(userId);
        return user !== null ? `${user.firstName} ${user.lastName}` : "Unknown";
    }
}

export default UserService;