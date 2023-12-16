import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import style from './Content.module.css';
import { Outlet, Routes } from 'react-router-dom';
console.log('test');

export default function Content() {
  return (
    <div className={style.content}>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
