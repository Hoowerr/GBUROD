import React from 'react';
import style from '../Navbar.module.css';

function Signup() {
  return (
    <div>
      <form>
        <h3>Регистрация</h3>
        <label>
          Имя пользователя
          <input type='text' />
        </label>
        <label>
          Пароль
          <input type='text' />
        </label>
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Signup;
