import React from "react";
import { Badge, Image } from "react-bootstrap";
import ListImage from "../ListImage";

interface Products {
  id: number;
  product_name: string;
  url: string;
  category_id: number;
  price: number;
  description?: string;
}
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
export default ProductList;
