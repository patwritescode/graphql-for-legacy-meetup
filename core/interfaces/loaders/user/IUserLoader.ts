import DataLoader from "dataloader";
import { User } from "../../../models";

export const IUserLoaderType = Symbol.for("IUserLoaderType");
interface IUserLoader extends DataLoader<number, User> { }
export default IUserLoader;