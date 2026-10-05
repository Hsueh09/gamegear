"use client";

interface AddToCartButtonProps {
  productName: string;
}

export default function AddToCartButton({
  productName,
}: AddToCartButtonProps) {
  const handleAddToCart = () => {
    alert(`${productName} 已加入購物車！`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
    >
      加入購物車
    </button>
  );
}