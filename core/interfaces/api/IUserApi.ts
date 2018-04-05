import { User } from "../../models";

export const UserApiType = Symbol.for("IUserApi");
export interface IUserApi {
    getUser(username: string): User;
}