export const PurchaseApiType = Symbol.for("IPurchaseApi");
export interface IPurchaseApi {
    findProduct(sku: string);
}