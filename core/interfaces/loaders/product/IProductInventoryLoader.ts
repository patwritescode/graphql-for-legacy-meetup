import DataLoader from "dataloader";
import { ProductInventory } from "../../../models";

export const IProductInventoryLoaderType = Symbol.for("IProductInventoryLoader");
interface IProductInventoryLoader extends DataLoader<number, ProductInventory> { }
export default IProductInventoryLoader;