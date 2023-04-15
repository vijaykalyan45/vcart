import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import handlecart from "../redux/reducer/handlecart";

const Navbar = () => {
const state=useSelector((state)=>state.handlecart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" href="#" to="/">
             V Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/contact">
                  Contact
                </Link>
              </li>
             
             
            </ul>
            <div className="buttons"> 
           <Link href="" className="btn btn-outline-dark" to="/login"><i className="fa fa-sharp fa-sign-in me-1"></i>login</Link>
           <Link href="" className="btn btn-outline-dark" to="/register"><i className="fa  fa-user-plus me-1"></i>Register</Link>
           <Link href="" className="btn btn-outline-dark" to="/cart"><i className="fa  fa-shopping-cart me-1"></i>Cart({state.length})</Link>

            
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
