import ProductImage from "./ProductImage";

interface ProductDetail {
    id: number;
    productId: number;
    name: string;
    description: string;
    details: string;
    warranty: string;
    images: ProductImage[];
}

export default ProductDetail;