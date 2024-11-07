import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">صفحة الرئيسية</NavLink>
        </li>
        <li>
          <NavLink to="/Courses">كورسات</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">تواصل معنا</NavLink>
        </li>
        <li>
          <NavLink to="/About">صفحة شخصية</NavLink>
        </li>
      </ul>
    </nav>
  );
}
