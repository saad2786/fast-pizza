import React from "react";
import Header from "./Header";
import CartOverview from "../feature/cart/CartOverview";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../feature/cart/cartSlice";
export default function AppLayout() {
  const navigation = useNavigation();
  const cartQuantity = useSelector(getTotalCartQuantity);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className=" mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      {cartQuantity > 0 && <CartOverview />}
    </div>
  );
}
