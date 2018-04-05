import { IPurchaseApi, Product } from "../../core";

class PurchaseApi implements IPurchaseApi {
    findProduct(sku: string): Product {
        throw new Error("Method not implemented.");
    }
}

export default PurchaseApi;