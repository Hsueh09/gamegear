"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          購物車
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          確認你的商品與數量
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex text-sm text-gray-500 transition hover:text-black"
        >
          ← 返回商品列表
        </Link>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              購物車目前是空的
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              找找你喜歡的電競商品吧。
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              瀏覽商品
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-950">
                      {item.product.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      單價：NT$ {item.product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-500">
                      數量
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`減少${item.product.name}數量`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center text-sm font-semibold text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1
                        )
                      }
                      aria-label={`增加${item.product.name}數量`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm text-gray-400 transition hover:text-gray-900 hover:underline"
                  >
                    刪除商品
                  </button>

                  <p className="text-base font-semibold text-gray-950">
                    小計：NT${" "}
                    {(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  總金額
                </span>

                <span className="text-2xl font-bold tracking-tight text-gray-950">
                  NT$ {totalPrice.toLocaleString()}
                </span>
              </div>

              <p className="mt-2 text-right text-xs text-gray-400">
                尚未包含運費
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}