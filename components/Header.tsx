"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-950 transition hover:text-gray-600"
        >
          GameGear<span className="text-gray-500">.</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-gray-600 sm:gap-8">
          <Link
            href="/"
            className="transition-colors hover:text-black"
          >
            首頁
          </Link>

          <Link
            href="/#products"
            className="transition-colors hover:text-black"
          >
            商品
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 transition-colors hover:text-black"
          >
            購物車
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}