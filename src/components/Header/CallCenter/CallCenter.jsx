import React from "react";
import style from "./CallCenter.module.css";
import { RiPhoneFill } from "react-icons/ri";

export default function CallCenter({ imageSrc, children }) {
  return (
    <div className={style.callCenter}>
      <RiPhoneFill className={style.phone} />
      <div>{children}</div>
    </div>
  );
}
