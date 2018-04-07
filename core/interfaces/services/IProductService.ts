import { ProductDetail, ProductInventory } from "../../models";

export const IProductServiceType = Symbol.for("IProductService");
interface IProductService {
    fetchDetails(productId: number): Promise<ProductDetail>;
    fetchInventory(productId: number): Promise<ProductInventory>;
}

export default IProductService;