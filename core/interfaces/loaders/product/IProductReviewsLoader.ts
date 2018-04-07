import DataLoader from "dataloader";
import { ProductReview } from "../../../models";

export const IProductReviewsLoaderType = Symbol.for("IProductReviewsLoader");
interface IProductReviewsLoader extends DataLoader<number, ProductReview[]> { }

export default IProductReviewsLoader;