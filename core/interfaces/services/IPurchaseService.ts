import { Product } from "../../models";
export interface IPurchaseService {
    findByUser(userId: number): Promise<Product>;
}