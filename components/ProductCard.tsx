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
      className="block rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-48 rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
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