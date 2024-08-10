export interface ProductData {
  name: string;
  price: number;
}

export interface ProductInCart {
  product: ProductData;
  quantity: number;
  totalPrice: number;
}
