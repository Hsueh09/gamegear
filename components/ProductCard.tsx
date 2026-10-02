import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

export default function ProductCard({
  id,
  name,
  price,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="block rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100">
        商品圖片
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">
        {name}
      </h3>

      <p className="mt-2 text-lg font-bold text-gray-900">
        NT$ {price.toLocaleString()}
      </p>
    </Link>
  );
}