import { ProductInCart } from "@/type";
import React from "react";
import CartItem from "./CartItem";
import { nanoid } from "nanoid";

interface CartProps {
  itemsInCart: ProductInCart[];
  removeFromCart: (item: ProductInCart) => void;
}

const Cart: React.FC<CartProps> = ({ itemsInCart, removeFromCart }) => {
  return (
    <div className="bg-slate-400 rounded-md p-3">
      <h1 className="text-5xl text-blue-950 font-extrabold">Cart</h1>
      {itemsInCart.map((item) => {
        return (
          <CartItem
            key={nanoid()}
            theItem={item}
            removeItem={removeFromCart}
          ></CartItem>
        );
      })}
      <h1 className="text-5xl text-blue-950 font-extrabold">
        Total :{" "}
        {itemsInCart
          .reduce((prev, curr) => {
            return prev + curr.totalPrice;
          }, 0)
          .toLocaleString()}
      </h1>
    </div>
  );
};

export default Cart;
