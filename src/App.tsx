import React from "react";
import "./App.css";
import Login from "./screens/Login";
import { Route } from "react-router-dom";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import AccountScreen from "./screens/AccountScreen";
import EmptyBagScreen from "./screens/EmptyBagScreen";
import { AnimatedSwitch } from "react-router-transition";
import OrderSuccess from "./screens/OrderSuccess";
import Target from "./screens/Target";
import AddressScreen from "./screens/AddressScreen";
import CustomNabar from "./componets/generalComponent/CustomNabar";
import HomeLayout from "./componets/generalComponent/HomeLayout";
import Steppers from "./componets/generalComponent/Stepper";
import { ToastContainer } from "react-toastify";
import NotFoundScreen from "./screens/NotFoundScreen";
import HorizontalMenu from "./componets/generalComponent/HorizontalMenu";

function App() {
  return (
    <>
      <CustomNabar></CustomNabar>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/products/:id">
          <ItemDetailsScreen></ItemDetailsScreen>
        </Route>
        <Route exact path="/account">
          <AccountScreen></AccountScreen>
        </Route>
        <Route exact path="/bag">
          <EmptyBagScreen></EmptyBagScreen>
        </Route>
        <Route exact path="/logout">
          <Login></Login>
        </Route>
        <Route exact path="/target">
          <Target></Target>
        </Route>
        <Route exact path="/success">
          <OrderSuccess></OrderSuccess>
        </Route>
        <Route exact path="/active">
          <AddressScreen />
        </Route>
        <Route exact path="/check-out">
          <Steppers></Steppers>
        </Route>
        <Route exact path="/">
          <HomeLayout></HomeLayout>
        </Route>
        <Route>
          <NotFoundScreen></NotFoundScreen>
        </Route>
      </AnimatedSwitch>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
