interface products {
  id: number;
  product_name: string;
  url: string;
  category_id: number;
  price: number;
  description?: string;
}
interface Category {
  id: number;
  title: string;
}
export const product_list: products[] = [
  {
    id: 1,
    product_name: "medical face mask",
    url:
      "http://atlas-content-cdn.pixelsquid.com/stock-images/surgical-mask-Wy1kdnB-600.jpg",
    category_id: 1,
    price: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },
  {
    id: 2,
    product_name: "black-face mask",
    url:
      "https://images.squarespace-cdn.com/content/v1/5ca3b2217980b3338106d9bf/1605623099689-91W0GXJ34VPWLGIJGPAC/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/BLACK+MAKS.png?format=1500w",
    category_id: 1,
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 5,
    product_name: "TV-spacify",
    url:
      "https://purepng.com/public/uploads/large/purepng.com-televisionelectronicstelevisiontv-941524674314zi3s6.png",
    category_id: 2,
    price: 250000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 9,
    product_name: "Xivi",
    url:
      "https://www.pngkit.com/png/full/6-65995_led-television-png-free-download-32-led-tv.png",
    category_id: 2,
    price: 700000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },
  {
    id: 10,
    product_name: "Weyco",
    url:
      "https://www.vippng.com/png/detail/59-596370_multi-function-tft-lcd-tv-monitor-television.png",
    category_id: 2,
    price: 340000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 12,
    product_name: "salad meal",
    url:
      "https://www.kindpng.com/picc/m/43-435202_fresh-healthy-food-png-free-download-transparent-background.png",
    category_id: 3,
    price: 140,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 15,
    product_name: "rice and oil",
    url:
      "https://freepngimg.com/thumb/grocery/53982-2-grocery-png-image-high-quality.png",
    category_id: 4,
    price: 170,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 18,
    product_name: "brown couch",
    url:
      "https://p.kindpng.com/picc/s/4-42790_furniture-png-image-furniture-png-transparent-png.png",
    category_id: 5,
    price: 71000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },
  {
    id: 19,
    product_name: "drawer",
    url: "https://freepngimg.com/thumb/furniture/6-2-furniture-png.png",
    category_id: 5,
    price: 50000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 21,
    product_name: "dinner set",
    url:
      "https://www.pngitem.com/pimgs/m/66-662323_wooden-furniture-images-png-transparent-png.png",
    category_id: 5,
    price: 81000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 24,
    product_name: "bicycle",
    url:
      "https://atlas-content-cdn.pixelsquid.com/assets/942914319736116270/jpeg-600/H12.jpg?modifiedAt=1",
    category_id: 6,
    price: 18000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },

  {
    id: 26,
    product_name: "toy car",
    url:
      "https://i.pinimg.com/736x/ac/74/23/ac74234ab4fcfa10a9341b739e7dca76.jpg",
    category_id: 6,
    price: 37000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum enim ab dolor asperiores doloremque ea pariatur quaerat eveniet labore maxime, non aliquid voluptatum, cumque impedit qui! Possimus, porro aliquid?",
  },
];
export const categories: Category[] = [
  {
    id: 1,
    title: "Face Masks",
  },
  {
    id: 2,
    title: "Electronics",
  },
  {
    id: 3,
    title: "Fresh Food",
  },
  {
    id: 4,
    title: "Grocery",
  },
  {
    id: 5,
    title: "Home",
  },
  {
    id: 6,
    title: "Kids",
  },
];
