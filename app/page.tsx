import ProductCard from "@/components/ProductCard";
import { products } from "./products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            GameGear
          </h1>

          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black">
              首頁
            </a>

            <a href="#" className="hover:text-black">
              商品
            </a>

            <a href="#" className="hover:text-black">
              購物車
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl bg-gray-900 px-8 py-16 text-white">
          <h2 className="text-4xl font-bold">
            GameGear
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            精選遊戲周邊與 3C 配件
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-200">
            開始購物
          </button>
        </div>
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
            />
          ))}
        </div>
      </section>
    </main>
  );
}