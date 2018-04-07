import DataLoader from "dataloader";
import { ProductDetail } from "../../../models";

export const IProductDetailLoaderType = Symbol.for("IProductDetailLoader");
interface IProductDetailLoader extends DataLoader<number, ProductDetail> { }
export default IProductDetailLoader;