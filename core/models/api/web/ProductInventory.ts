interface ProductInventory {
    id: number;
    productId: number;
    total: number;
    available: number;
    price: number;
    salePrice: number;
    onSale: boolean;
}

export default ProductInventory;