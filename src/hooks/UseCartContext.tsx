import React from "react";

interface Cart {
  id: number;
  product_name: string;
  url: string;
  category_id: number;
  price: number;
  description?: string;
  qty: number;
}
const cart: Cart[] = [];
const Shop = React.createContext(cart);
export default Shop;
