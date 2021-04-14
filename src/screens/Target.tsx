import React from "react";
import { Container, Image } from "react-bootstrap";
import { Circle, Binoculars } from "react-bootstrap-icons";
import DottedHr from "../componets/DottedHr";
import LeftChevron from "../componets/LeftChevron";
import ListCheckout from "../componets/ListCheckout";
import ListItem from "../componets/ListItem";

import RightChevron from "../componets/RightChvron";
import SumTotal from "../componets/SumTotal";
import TextRightLeft from "../componets/TextRightLeft";
import { useHistory } from "react-router-dom";

const list = [
  {
    icon: <Circle size={19} color="white"></Circle>,
    title: "Target",
    subTitle: "25/01/2021 : 01:55 | 3 items | usz 100d",
    backgroundColor: "red",
  },
  {
    icon: (
      <Image
        src="https://s.clipartkey.com/mpngs/s/13-134841_check-mark-computer-icons-clip-art-green-circle.png"
        height={30}
        width={30}
        style={{
          borderRadius: 15,
        }}
      ></Image>
    ),
    title: "Order Confirmed",
    subTitle: "25/02/2021 :05:49",
    backgroundColor: "green",
  },
  {
    icon: (
      <Image
        src="https://s.clipartkey.com/mpngs/s/13-134841_check-mark-computer-icons-clip-art-green-circle.png"
        height={30}
        width={30}
        style={{
          borderRadius: 15,
        }}
      ></Image>
    ),
    title: "Shipped",
    subTitle: "9/02/2021 :09:49",
    backgroundColor: "green",
  },
  {
    icon: <Binoculars size={19} color="white"></Binoculars>,
    title: "Delivered",
    subTitle: "25/02/2021 :05:49",
    backgroundColor: "grey",
  },
];
interface ListPro {
  icon: JSX.Element;
  title: string;
  subTitle: string;
  backgroundColor: string;
}
const uris = [
  "https://p.kindpng.com/picc/s/4-42790_furniture-png-image-furniture-png-transparent-png.png",
  "https://freepngimg.com/thumb/furniture/6-2-furniture-png.png",
];
export default function Target() {
  const [items, setItems] = React.useState<ListPro[]>([]);
  const [uri, setUri] = React.useState<string[]>([]);
  const history = useHistory();

  React.useEffect(() => {
    setItems(list);
    setUri(uris);
    document.title = "target";
  }, []);
  return (
    <>
      <h6 className="my-0 py-0 ml-5 cursor-pointer">
        <span className=" text-muted">Order #24565</span>
      </h6>
      <LeftChevron
        onClick={() => {
          history.goBack();
        }}
      ></LeftChevron>
      <RightChevron
        onClick={() => {
          history.push(`check-out`);
        }}
      ></RightChevron>

      <hr className="text-muted my-0" />
      <Container className="my-5 px-5">
        <div
          className="p-3 border border-dark-50 m-auto"
          style={{ borderRadius: 20, maxWidth: "60%" }}
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                Icon={item.icon}
                IconSize={18}
                backgroundColor={item.backgroundColor}
                subtitle={item.subTitle}
                title={item.title}
              ></ListItem>
              <hr className="my-2"></hr>
            </React.Fragment>
          ))}
          <div>
            <p className="py-0 my-2 text-muted">3 items</p>
          </div>

          <ListCheckout
            color="grey"
            imagesrc={uri[0]}
            price="UGX 8,700"
            size="medium"
            title="Norbury Scandavian Wood Leg Ottoman"
            value="X2"
          />
          <ListCheckout
            color="grey"
            imagesrc={uri[1]}
            price="UGX 8,700"
            size="medium"
            title="Metal Country Charlet charm and wood"
            subTitle="Bench - sachina home"
            value="X1"
          />
          <hr className="text-muted my-0" />
          <SumTotal />
          <DottedHr></DottedHr>
          <TextRightLeft left="Total" right="UGX 12,000" />
          <TextRightLeft
            left={
              <i className="text-muted mt-1">Inclusive of all Income taxes</i>
            }
          />
          <DottedHr />
          <TextRightLeft
            left={
              <strong className="text-success my-2">
                You are about to save uxd 27,000 on this order
              </strong>
            }
          />
          <hr />
          <TextRightLeft
            left={
              <strong className="text-muted text-capitalize">
                your delivery details
              </strong>
            }
          />
          <TextRightLeft
            left={<strong className="text-black my-1">shery kara</strong>}
          />
          <TextRightLeft left="Cash on Delivery" muted={true}></TextRightLeft>
          <TextRightLeft
            left={<p className="text-muted-50">09032295542</p>}
          ></TextRightLeft>
          <TextRightLeft
            left={
              <p className="text-muted mb-0">
                Quench villa, plot 12, Nkruma Rd
              </p>
            }
          ></TextRightLeft>
          <TextRightLeft
            left={<p className="text-muted mt-0">Kampala,Uganda</p>}
          ></TextRightLeft>
        </div>
      </Container>
    </>
  );
}
