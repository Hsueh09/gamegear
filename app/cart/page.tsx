"use client";

import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">
          購物車
        </h1>

        {cart.length === 0 ? (
          <p className="mt-8 text-gray-600">
            購物車目前是空的
          </p>
        ) : (
          <div className="mt-8 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.product.id}-${index}`}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.product.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  NT$ {item.product.price.toLocaleString()}
                </p>

                <p className="mt-2 text-gray-600">
                  數量：{item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}