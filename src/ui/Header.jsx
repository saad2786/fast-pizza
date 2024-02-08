import React from "react";
import { Link } from "react-router-dom";
import SerachOreder from "../feature/order/SerachOreder";
import UserName from "../feature/user/UserName";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 px-4 py-3 font-semibold uppercase ">
      <Link to="/" className="tracking-widest ">
        <h1>Fast React Pizza Co.</h1>
      </Link>
      <SerachOreder />
      <UserName />
    </header>
  );
}
