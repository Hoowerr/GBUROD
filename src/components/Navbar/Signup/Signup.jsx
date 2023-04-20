import React from "react";
import style from "../Navbar.module.css";

function Signup() {
  return (
    <div>
      <form>
        <h1>Login form</h1>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signup;
