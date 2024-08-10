"use client";
import React from "react";
import Product from "./Product";
import { ProductData, ProductInCart } from "@/type";
import { useState } from "react";
import Cart from "./Cart";
import { nanoid } from "nanoid";

export default function AllProducts() {
  const [cart, setCart] = useState<ProductInCart[]>([]);
  const datas: ProductData[] = [
    { name: "Iphone", price: 20000 },
    { name: "Samsung Galaxy", price: 18000 },
    { name: "Google Pixel", price: 22000 },
    { name: "OnePlus", price: 25000 },
    { name: "Sony Xperia", price: 27000 },
    { name: "Huawei P30", price: 23000 },
    { name: "Nokia 7.2", price: 15000 },
    { name: "Xiaomi Mi 11", price: 19000 },
    { name: "Oppo Reno", price: 21000 },
    { name: "Realme X", price: 16000 },
  ];

  function addToCart(product: ProductData) {
    let updatedCart: ProductInCart[] = [...cart];
    const index = updatedCart.findIndex((inCart: ProductInCart) => {
      //   alert(inCart.product.name + "==" + product.name);
      return inCart.product.name == product.name;
    });
    if (index === -1) {
      const newProduct: ProductInCart = {
        product: product,
        quantity: 1,
        totalPrice: product.price,
      };
      updatedCart.push(newProduct);
    } else {
      updatedCart[index].quantity++;
      const newTotal =
        updatedCart[index].quantity * updatedCart[index].product.price;
      updatedCart[index].totalPrice = newTotal;
    }
    setCart(updatedCart);
  }

  function removeItem(item: ProductInCart) {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (itemInCart) => item.product == itemInCart.product
    );
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          product: updatedCart[index].product,
          quantity: updatedCart[index].quantity - 1,
          totalPrice:
            (updatedCart[index].quantity - 1) *
            updatedCart[index].product.price,
        };
      } else {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  }

  return (
    <div>
      <p className="text-5xl text-center m-7">Shop Header</p>
      <div className="flex gap-5">
        <div className="w-1/2">
          <div className="bg-slate-400 rounded-md p-3">
            <h1 className="text-5xl text-blue-950 font-extrabold">Products</h1>
            {datas.map((data) => {
              return (
                <Product
                  key={nanoid()}
                  productData={data}
                  addToCart={addToCart}
                ></Product>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <Cart
            key={nanoid()}
            itemsInCart={cart}
            removeFromCart={removeItem}
          ></Cart>
        </div>
      </div>
    </div>
  );
}
