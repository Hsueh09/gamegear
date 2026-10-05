"use client";

import { useState } from "react";
import ProductQuantity from "@/components/ProductQuantity";
import { useCart } from "@/components/CartContext";
import { Product } from "@/app/products";
import Link from "next/link";

interface ProductPurchaseProps {
  product: Product;
}

export default function ProductPurchase({
  product,
}: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity,
    });

    alert(`${product.name}，數量：${quantity}`);
  };

  return (
    <div>
      <ProductQuantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
    <div>
        <button
          onClick={handleAddToCart}
          className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
        > 
          加入購物車
        </button>

        <Link
          href="/cart"
          className="mt-3 block w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-100"
        >
          前往購物車
        </Link>
    </div>

    </div>
  );
}