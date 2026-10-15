"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/app/products";

export default function ProductSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = products[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((current) =>
      (current - 1 + products.length) % products.length
    );
  };

  const showNext = () => {
    setCurrentIndex((current) =>
      (current + 1) % products.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        (current + 1) % products.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8">
      <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 text-gray-950">
        <div className="grid min-h-[420px] items-center gap-0 px-16 sm:grid-cols-2 sm:gap-4 sm:px-20 lg:px-24">
          <div className="order-2 px-4 py-10 sm:order-1 sm:px-8 lg:px-12">
            <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {product.name}
            </h3>

            <p className="mt-5 text-xl font-medium text-gray-700">
              NT$ {product.price.toLocaleString()}
            </p>

            <Link
              href={`/products/${product.id}`}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              探索商品
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="order-1 flex h-64 items-center justify-center p-8 sm:order-2 sm:h-full sm:min-h-[420px] sm:p-12"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[360px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="上一個商品"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-lg text-gray-700 shadow-sm transition hover:bg-gray-100 sm:left-5"
        >
          ←
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="下一個商品"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-lg text-gray-700 shadow-sm transition hover:bg-gray-100 sm:right-5"
        >
          →
        </button>
      </section>
    </div>
  );
}