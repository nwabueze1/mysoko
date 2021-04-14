import React from "react";
import { useParams } from "react-router-dom";
import { allProduct } from "../services/products.service";
import products from "../componets/Interface/Product";
import Description from "../componets/Description";
import ScreenLayout from "../componets/Screen.Layout";
import LeftChevron from "../componets/LeftChevron";
import RightChevron from "../componets/RightChvron";
import { useHistory } from "react-router-dom";
import ImageCard from "../componets/ImageCard";
import { Badge } from "react-bootstrap";
import Footer from "../componets/generalComponent/Footer";
import HorizontalMenu from "../componets/generalComponent/HorizontalMenu";

interface routes {
  id: string;
}

export default function ItemDetailsScreen() {
  const [allProducts, setAllProduct] = React.useState<products>();
  const [routeId, setRouteId] = React.useState<number>(0);
  const history = useHistory();
  const uris: string[] = [
    "https://images.squarespace-cdn.com/content/v1/5ca3b2217980b3338106d9bf/1605623099689-91W0GXJ34VPWLGIJGPAC/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/BLACK+MAKS.png?format=1500w",
    "https://purepng.com/public/uploads/large/purepng.com-televisionelectronicstelevisiontv-941524674314zi3s6.png",
    "https://www.pngkit.com/png/full/6-65995_led-television-png-free-download-32-led-tv.png",
    "https://www.vippng.com/png/detail/59-596370_multi-function-tft-lcd-tv-monitor-television.png",
    "https://p.kindpng.com/picc/s/4-42790_furniture-png-image-furniture-png-transparent-png.png",
    "https://freepngimg.com/thumb/furniture/6-2-furniture-png.png",
  ];
  const { id }: routes = useParams();
  React.useEffect(() => {
    setRouteId(parseInt(id));
    setAllProduct(allProduct[parseInt(id) - 1]);
  }, []);

  return (
    <>
      <Description list={allProducts as products}></Description>
      <hr className="text-muted" />
      <p className="text-muted">
        <strong>Related Products</strong>
      </p>
      <div className="p-3">
        <HorizontalMenu />
      </div>
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/success")}></RightChevron>
      <Footer></Footer>
    </>
  );
}
