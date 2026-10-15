import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-1 pb-1 pt-5">
        <h3 className="text-base font-semibold tracking-wide text-gray-900 transition-colors group-hover:text-gray-600">
          {name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-950">
            NT$ {price.toLocaleString()}
          </p>

          <span className="text-sm text-gray-400 transition-colors group-hover:text-gray-900">
            查看商品 →
          </span>
        </div>
      </div>
    </Link>
  );
}