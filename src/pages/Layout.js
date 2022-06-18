import { Outlet, Link } from "react-router-dom";
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";
import Calculator from "./Calculator";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prikaz">Prikaz</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer className="mt-4 text-center">
        <Link to="/">Home</Link>
        <Link to="/prikaz">Prikaz</Link>
        <p className="mt-4">Copyright © 2022. All rights reserved.</p>
      </footer>

      
    </>
  )
};

export default Layout;