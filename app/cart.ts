import { Product } from "@/app/products";

export interface CartItem {
  product: Product;
  quantity: number;
}