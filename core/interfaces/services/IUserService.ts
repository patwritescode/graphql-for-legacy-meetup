import { User } from "../../models";

export const IUserServiceType = Symbol.for("IUserServiceType");
interface IUserService {
    fetchUser(id: number): Promise<User>;
    fetchFullName(id: number): Promise<string>;
}

export default IUserService;