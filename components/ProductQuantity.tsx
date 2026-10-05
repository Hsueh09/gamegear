"use client";

interface ProductQuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductQuantity({
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">
        數量
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100"
        >
          −
        </button>

        <span className="w-8 text-center font-medium">
          {quantity}
        </span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100"
        >
          ＋
        </button>
      </div>
    </div>
  );
}