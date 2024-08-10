import { ProductInCart } from "@/type";
import React from "react";

interface CartItemProps {
  theItem: ProductInCart;
  removeItem: (item: ProductInCart) => void;
}

const CartItem: React.FC<CartItemProps> = ({ theItem, removeItem }) => {
  const handleClick = () => {
    removeItem(theItem);
  };
  return (
    <div className="text-md flex bg-slate-500 p-4 border-gray-800 border-1 relative my-1 items-center h-16 shadow-xl">
      <div className="absolute">
        <span className="font-bold">Name: </span>
        <span className="font-mono">{theItem.product.name}</span>
      </div>
      <div className="absolute left-52">
        <span className="font-bold">Price: </span>
        <span className="font-mono">
          {theItem.product.price.toLocaleString()}
        </span>
      </div>
      <div className="absolute left-80">
        <span className="font-bold">Qn: </span>
        <span className="font-mono">{theItem.quantity}</span>
      </div>
      <div className="absolute left-96">
        <span className="font-bold">Total: </span>
        <span className="font-mono">{theItem.totalPrice.toLocaleString()}</span>
      </div>
      <div className="absolute left-3/4">
        <button
          onClick={handleClick}
          className="rounded-md bg-red-600 px-3.5 py-2.5 text-xl text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
