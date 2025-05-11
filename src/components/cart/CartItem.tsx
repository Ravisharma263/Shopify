import React from 'react';
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

type CartItemProps = {
  product: Product;
  quantity: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="h-full w-full object-cover object-center" 
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.name}</h3>
            <p className="ml-4">{formatPrice(product.price * quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">Qty</span>
            <select 
              value={quantity} 
              onChange={(e) => onUpdateQuantity(product.id, parseInt(e.target.value))}
              className="rounded border-gray-300"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="flex">
            <button 
              type="button" 
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => onRemove(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;