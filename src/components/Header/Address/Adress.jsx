import React from "react";
import style from "./Adress.module.css";
import { ImLocation } from "react-icons/im";

export default function Address({ children }) {
  return (
    <div className={style.address}>
      <ImLocation className={style.location} />
      <div>{children}</div>
    </div>
  );
}
