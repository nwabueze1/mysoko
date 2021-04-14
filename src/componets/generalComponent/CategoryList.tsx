import React from "react";
import { ListGroup } from "react-bootstrap";

interface Category {
  id: number;
  title: string;
}

interface categoryProps {
  categories: Category[];
  handleClick: (x: string | number) => void;
}
const CategoryList = ({ categories, handleClick }: categoryProps) => {
  const [isActive, setIsActive] = React.useState<string>("all");

  return (
    <ListGroup id="category">
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
export default CategoryList;
