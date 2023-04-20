import React from "react";

import Address from "./Address/Adress";
import WorkingMode from "./WorkingMode/WorkingMode";
import CallCenter from "./CallCenter/CallCenter";
import repubcancercenter from "../../images/repubcancercenter.png";

import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={repubcancercenter} alt="логотип" className="header__logo" />
        </Link>
        <div className="header__container">
          <div className="header__nav">
            <Address>
              <>
                <p>Чеченская Республика</p>
                <p>364029, г. Грозный</p>
                <p>ул. Леонова, 81</p>
                <a className="direction" href="about">
                  Схема проезда
                </a>
              </>
            </Address>

            <WorkingMode>
              <>
                <p>Режим работы</p>
                <p className="header__working-time">8:30 - 17:00</p>
                <p>выходные: </p>
                <p> суббота, воскресенье</p>
              </>
            </WorkingMode>

            <CallCenter>
              <>
                <p>Контакты</p>
                <p className="header__call-phone_number">+7 (938) 020-33-33</p>
                <p>режим приема звонков:</p>
                <p>с 8:45 до 17:00 по будням</p>
              </>
            </CallCenter>
          </div>
        </div>
      </div>
    </header>
  );
}
