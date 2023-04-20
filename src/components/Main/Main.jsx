import React from "react";
import style from "./Main.module.css";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className={style.main}>
      <Outlet />
    </div>
  );
}

export default Main;

// <div className={style.main}>
//   <MainAbout />
// </div>
