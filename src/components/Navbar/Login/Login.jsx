import React from "react";
import style from "../Navbar.module.css";

const Login = () => {
  return (
    <div>
      <form>
        <h3>Войти на сайт</h3>
        <label>
          Имя пользователя
          <input type="text" />
        </label>
        <label>
          Пароль
          <input type="text" />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
