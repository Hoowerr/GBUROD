import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Content from "./Content/Content";
import About from "./Navbar/About/About";
import Dispanser from "./Navbar/Dispanser/Dispanser";
import Structure from "./Navbar/Structure/Structure";
import PaidServices from "./Navbar/PaidServices/PaidServices";
import Login from "./Navbar/Login/Login";
import Signup from "./Navbar/Signup/Signup";

export default function App() {
  return (
    <BrowserRouter basename="GBUROD">
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<div>Главная страница</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/dispanser" element={<Dispanser />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/paidservice" element={<PaidServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
