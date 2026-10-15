"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "./products";
import { useCart } from "@/components/CartContext";
import Link from "next/link";
import ProductSlideshow from "@/components/ProductSlideshow";

export default function Home() {
    const { cart } = useCart();
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProductSlideshow />
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          熱門商品
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
             key={product.id}
             id={product.id}
             name={product.name}
             price={product.price}
             image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}