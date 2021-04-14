import React from "react";
import { Badge, Image, ListGroup, Form, Container } from "react-bootstrap";
import EmptyCat from "../componets/EmptyCat";
import ListImage from "../componets/ListImage";
import categories from "../services/category.service";
import allproducts, { filteredbyCategory } from "../services/products.service";
import HomeLayout from "../componets/HomeLayout";
import ScreenLayout from "../componets/Screen.Layout";
import LeftChevron from "../componets/LeftChevron";
import RightChevron from "../componets/RightChvron";
import { useHistory } from "react-router-dom";

interface Category {
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

interface categoryProps {
  categories: Category[];
  handleClick: (x: string | number) => void;
  handleChange: (v: number) => void;
}
const CategoryList = ({ categories, handleClick }: categoryProps) => {
  const [isActive, setIsActive] = React.useState<string>("all");

  return (
    <ListGroup id="category" className="sticky-top">
      <ListGroup.Item
        className={isActive === "all" ? "active" : ""}
        onClick={() => {
          setIsActive("all");
          handleClick("all");
        }}
      >
        All
      </ListGroup.Item>
      {categories.map((c, i) => (
        <ListGroup.Item
          key={i}
          onClick={() => {
            setIsActive(c.title);
            filteredbyCategory(c.id);
            handleClick(c.id);
          }}
          className={isActive === c.title ? "active" : ""}
        >
          {c.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

interface productListProp {
  product: Products[];
}
const ProductList = ({ product }: productListProp): JSX.Element => {
  return (
    <div id="product">
      <p>
        <Badge variant="primary">{product.length}</Badge> Items
      </p>
      {product.map((m, i) => (
        <React.Fragment key={i}>
          <div className="p-1" id="lists">
            <ListImage
              key={i}
              Image={
                <Image
                  src={m.url}
                  alt="image"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
                  id="image"
                />
              }
              buttonTitle="add"
              subtitle={m.price.toString()}
              title={m.product_name}
              id={m.id}
            ></ListImage>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};
const BagList = (): JSX.Element => {
  return (
    <div className="sticky-top">
      <EmptyCat></EmptyCat>
    </div>
  );
};
export default function Home() {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [filtered, setFiltered] = React.useState<Products[]>([]);
  const [category, setCategories] = React.useState<Category[]>([]);
  const history = useHistory();
  const handleFilter = (id: number | string) => {
    id === "all"
      ? setFiltered(products)
      : setFiltered(products.filter((m) => m.category_id === id));
  };
  const handleChange = (x: number) => {
    setFiltered(products.filter((m) => m.price < x));
  };
  React.useEffect(() => {
    setFiltered(allproducts);
    setProducts(allproducts);
    setCategories(categories);
    document.title = "home";
  }, []);
  return (
    <>
      <Container>
        <ScreenLayout
          children={
            <>
              <HomeLayout
                chilldLeft={
                  <CategoryList
                    categories={category}
                    handleClick={(id) => handleFilter(id)}
                    handleChange={(value) => handleChange(value)}
                  ></CategoryList>
                }
                childCenter={<ProductList product={filtered}></ProductList>}
                ChildRight={<BagList></BagList>}
              ></HomeLayout>
            </>
          }
        ></ScreenLayout>
      </Container>
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/bag")}></RightChevron>
    </>
  );
}
