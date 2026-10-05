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
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-900">
            找不到商品
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            返回首頁
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-black"
        >
          ← 返回商品列表
        </Link>

        <div className="mt-8 grid gap-10 rounded-2xl bg-white p-8 md:grid-cols-2">
          {/* 商品圖片 */}
          <div className="relative flex h-96 items-center justify-center rounded-xl bg-gray-100">
            <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            />
          </div>
          {/* 商品資訊 */}
          <div>
            <p className="text-sm text-gray-500">
              GameGear 精選商品
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold text-gray-900">
              NT$ {product.price.toLocaleString()}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <ProductPurchase product={product} />

          </div>
        </div>
      </div>
    </main>
  );
}