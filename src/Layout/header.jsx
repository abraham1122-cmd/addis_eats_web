


import {Link} from "react-router-dom";

import { useTheme } from "../theme/themeContext";

import useCartStore from "../Cart/cartStore";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleHalfStroke, faXmark, faBars, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function Header({ search, onSearch, onCartClick }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const items = useCartStore((state)=> state.items)

  const {theme, toggleTheme} = useTheme()

  const cartCount = items.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <header className="header">
      <div className="logo">
        <img src="../images/logooo react.jpg" alt="addis eats logo" />
        Addis Eats
      </div>

      <div className="search-container">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={onSearch}
          placeholder="Search dishes here..."
        />
      </div>

      <button className="hamburger"
      type="button"
      onClick={() => setMenuOpen(!menuOpen)} >

      <FontAwesomeIcon icon={menuOpen? faXmark : faBars} />
       </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        
        <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>

        <Link to="/Menu" onClick={()=>setMenuOpen(false)}>Menu</Link>

        <Link to="/orders" onClick={()=>setMenuOpen(false)}>Orders</Link>

        <Link to="/cart"
          // onClick={onCartClick}
          
        >
        <FontAwesomeIcon icon={faCartShopping} />
         
           ({cartCount})
        </Link>

        <Link to="/favorites" onClick={()=>setMenuOpen(false)}>Fav</Link>

        <Link to="/checkout" onClick={()=>setMenuOpen(false)}>Checkout</Link>
         
        <button className="themebtn"   type="button" 
        onClick={()=> {
          
          toggleTheme();
          setMenuOpen(false);
        
        }}
        
        
        >

        <FontAwesomeIcon icon={faCircleHalfStroke} />
        {theme === "light"? "Dark" : "light"}
     

  
    </button>

        <Link to="/admin/login">
        
        <FontAwesomeIcon icon={faUser} />
        Admin</Link>
        
      </nav>
    </header>
  );
}

export default Header;