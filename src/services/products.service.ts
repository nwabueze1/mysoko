import { product_list } from "./fake_database";

export default product_list;
export let allProduct = product_list;
export const filteredbyCategory = (category_id: number) => {
  allProduct = product_list.filter((m) => m.category_id !== category_id);
  return allProduct;
};
export const seachProducts = (searchIndex: string) => {
  return product_list.filter((m) => m.product_name.match(searchIndex));
};
export const getProductById = (Id: number) => {
  return allProduct[allProduct.findIndex((m) => m.id === Id)];
};
