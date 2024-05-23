// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
//import logo from '../assests/logo.png'
import {MdCurrencyPound, MdOutlineShoppingCart } from "react-icons/md";
import logo from '../assests/logo.jpg'


//swigato/src/assests/logo.jpg

const Navbar = ({props}) => {
  console.log("props is",props)
  return (
    <nav className="navbar">
       <div className="navbar__left">
        <Link to="/">
           <img src={logo} className="navbar__logo" /> 
        </Link>
      </div> 
      <div className="navbar__right">
      <button className='btn btn-success  btn-sm col-xs-2 ml-2' ><MdCurrencyPound />Buy Now</button>
          <span className="ml-6 mr-6"></span> 
          <button   className='btn btn-warning ml-2 ms-2  btn-sm col-xs-2 '  onClick={props }  ><MdOutlineShoppingCart  /> Your Cart
          
          </button>



       
      </div>
    </nav>
  );
};

export default Navbar;
