import React from "react";
import { Link } from "react-router-dom";

export default function ({ children, disabled, to, type, onClick }) {
  const base =
    "text-md inline-block rounded-full bg-yellow-400  font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2    disabled:cursor-not-allowed  disabled:opacity-50 ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    round: base + "px-3 py-1.5 md:px-3.5 md:py-2 text-sm font-bold",
    secondary:
      " text-md inline-block rounded-full  font-bold uppercase tracking-wide text-stone-400 transition-colors duration-300 border-2 border-stone-300  hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2    disabled:cursor-not-allowed  disabled:opacity-50 px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
