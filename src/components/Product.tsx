import React from "react";
import { ProductData } from "@/type";

interface ProductProps {
  productData: ProductData;
  addToCart: (product: ProductData) => void;
}

const Product: React.FC<ProductProps> = ({ productData, addToCart }) => {
  const handleClick = () => {
    addToCart(productData);
  };
  return (
    <div className="text-xl flex bg-slate-500 p-4 border-gray-800 border-1 relative my-1 items-center h-16 shadow-xl">
      <div className="absolute">
        <span className="font-bold">Name: </span>
        <span className="font-mono">{productData.name}</span>
      </div>
      <div className="absolute left-2/4">
        <span className="font-bold">Price: </span>
        <span className="font-mono">{productData.price.toLocaleString()}</span>
      </div>
      <div className="absolute left-3/4">
        <button
          onClick={handleClick}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
