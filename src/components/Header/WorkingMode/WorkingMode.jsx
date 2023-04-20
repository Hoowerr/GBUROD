import React from "react";
import style from "./WorkingMode.module.css";
import { TbClockHour9 } from "react-icons/tb";
export default function WorkingMode({ imageSrc, children }) {
  return (
    <div className={style.workingMode}>
      <TbClockHour9 className={style.clock} />
      <div>{children}</div>
    </div>
  );
}
