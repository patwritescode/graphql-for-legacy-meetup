import DataLoader from "dataloader";
import { IUserLoader, User, IWebApiType, IWebApi } from "../../core";
import { injectable, inject } from "inversify";

@injectable()
class UserLoader extends DataLoader<number, User> implements IUserLoader {
    constructor(
        @inject(IWebApiType) webApi: IWebApi
    ) {
        const batch = async(keys: number[]) => {
            const results: User[] = [];
            for(const key of keys) {
                const result = await webApi.fetchUser(key);
                results.push(result);
            }
            return results;
        }
        super(batch);
    }
}

export default UserLoader;