import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/products";
import ProductPurchase from "@/components/ProductPurchase";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-950">
            找不到商品
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block text-sm text-gray-600 transition hover:text-black hover:underline"
          >
            ← 返回首頁
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition hover:text-black"
        >
          ← 返回商品列表
        </Link>

        <div className="mt-8 grid gap-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 md:grid-cols-2 md:gap-12 md:p-10">
          {/* 商品圖片 */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-[420px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8 transition duration-500 hover:scale-105 sm:p-12"
              priority
            />
          </div>

          {/* 商品資訊 */}
          <div className="flex flex-col justify-center py-2 sm:py-6">
            <p className="text-xs font-medium tracking-[0.2em] text-gray-400">
              GAMEGEAR COLLECTION
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-6 border-b border-gray-200 pb-6">
              <p className="text-3xl font-bold tracking-tight text-gray-950">
                NT$ {product.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-900">
                商品介紹
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="mt-8">
              <ProductPurchase product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}