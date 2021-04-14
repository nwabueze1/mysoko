import React from "react";
import SearchBar from "../SearchBar";
import { categories, product_list } from "../../services/fake_database";
import CategoryList from "./CategoryList";
import EmptyCat from "../EmptyCat";
import ProductList from "./Products";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import LeftChevron from "../LeftChevron";
import RightChevron from "../RightChvron";

interface Categories {
  id: number;
  title: string;
}
interface Products {
  id: number;
  product_name: string;
  url: string;
  category_id: number;
  price: number;
  description?: string;
}
export default function HomeLayout() {
  const [category, setCategories] = React.useState<Categories[]>([]);
  const [filtered, setFiltered] = React.useState<Products[]>([]);
  const [products, setProducts] = React.useState<Products[]>([]);
  const history = useHistory();
  const handleSelect = (x: string | number) => {
    if (x === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((m) => m.category_id === parseInt(x)));
    }
  };

  React.useEffect(() => {
    setCategories(categories);
    setProducts(product_list);
    setFiltered(product_list);
  }, []);
  return (
    <div className="mb-5">
      <div id="homelayout" className="border-top border-muted my-4">
        <div className="pl-5 mt-5 ">
          <CategoryList
            categories={category}
            handleClick={(x) => handleSelect(x)}
          ></CategoryList>
        </div>
        <div className="border-left border-right p-5">
          <ProductList product={filtered}></ProductList>
        </div>
        <div className="p-5">
          <EmptyCat></EmptyCat>
        </div>
        <SearchBar
          style={{
            position: "absolute",
            top: 120,
            left: 400,
            right: 450,
          }}
        ></SearchBar>
      </div>
      <Footer></Footer>
      <LeftChevron onClick={() => history.push("/notfound")}></LeftChevron>
      <RightChevron
        onClick={() => history.push(`/products/${2}`)}
      ></RightChevron>
    </div>
  );
}
