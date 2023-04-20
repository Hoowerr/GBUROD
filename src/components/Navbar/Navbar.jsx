import React from "react";
import { Route, Router, Routes, Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={style.NavBar}>
      <Link to="/dispanser" className={style.navText}>
        О диспансере
      </Link>
      <Link to="/structure" className={style.navText}>
        Структура
      </Link>
      <Link to="/paidservice" className={style.navText}>
        Платные услуги
      </Link>
      <Link to="/about" className={style.navText}>
        Контакты
      </Link>
      <Link to="/login" className={style.navText}>
        Войти
      </Link>
      <Link to="/signup" className={style.navText}>
        Регистрация
      </Link>
    </nav>
  );
}

// import About from "./About/About";
// import Dispanser from "./Dispanser/Dispanser";
// import Structure from "./Structure/Structure";
// import PaidServices from "./PaidServices/PaidServices";
// import Login from "./Login/Login";
// import Signup from "./Signup/Signup";
{
  /* <Structure className={style.navText} />
<About className={style.navText} />
<Dispanser className={style.navText} />
<PaidServices className={style.navText} />
<Login className={style.navText} />
<Signup className={style.navText} /> */
}
