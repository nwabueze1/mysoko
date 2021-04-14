import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import ScrollMenu from "react-horizontal-scroll-menu";
import ImageCard from "../ImageCard";

// list of items
interface lists {
  name: string;
}
const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
];
interface Prop {
  text: string;
  selected: string;
}
const MenuItem = ({ selected, text }: Prop) => {
  return (
    <div className={`menu-item ${selected ? "active" : ""}`}>
      <ImageCard url={text}></ImageCard>
    </div>
  );
};

const Menu = (list: string[], selected: string) =>
  list.map((el, i) => {
    return <MenuItem text={el} key={i} selected={selected} />;
  });

interface Arr {
  text: string;
  className: string;
}
const uris: string[] = [
  "https://images.squarespace-cdn.com/content/v1/5ca3b2217980b3338106d9bf/1605623099689-91W0GXJ34VPWLGIJGPAC/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/BLACK+MAKS.png?format=1500w",
  "https://purepng.com/public/uploads/large/purepng.com-televisionelectronicstelevisiontv-941524674314zi3s6.png",
  "https://www.pngkit.com/png/full/6-65995_led-television-png-free-download-32-led-tv.png",
  "https://www.vippng.com/png/detail/59-596370_multi-function-tft-lcd-tv-monitor-television.png",
  "https://p.kindpng.com/picc/s/4-42790_furniture-png-image-furniture-png-transparent-png.png",
  "https://freepngimg.com/thumb/furniture/6-2-furniture-png.png",
];

const ArrowLeft = <ChevronLeft size={30}></ChevronLeft>;
const ArrowRight = <ChevronRight size={30}></ChevronRight>;

const selected = "item1";
export default function HorizontalMenu() {
  const [menuItems, setMenuItems] = React.useState<JSX.Element[]>();

  React.useEffect(() => {
    setMenuItems(Menu(uris, selected) as JSX.Element[]);
  }, []);
  return (
    <div className="App">
      <ScrollMenu
        data={menuItems}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
      />
    </div>
  );
}
