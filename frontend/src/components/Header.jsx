import React, { useEffect, useRef } from 'react';
import './componentsCss/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const sideBarRef = useRef(null);
  const sideBarIconRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!sideBarRef.current.contains(event.target) && !sideBarIconRef.current.contains(event.target)) {
        sideBarRef.current.classList.remove('openSideBar');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleToggleSideBar = () => {
    sideBarRef.current.classList.toggle('openSideBar');
  };

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src="../../public/img/logo.png" alt="" />
        </Link>
        <div>
          <p>Slim Kells</p>
          <p>Reedem Codes</p>
        </div>
      </div>
      <nav>
        <Link to={"/"} >Home</Link>
        <Link to={"/cart"} >Cart</Link>
        <Link to={"/order"} >Order</Link>
        <Link to={"/myCodes"} >My Codes</Link>
        <Link to={"#"} >Support</Link>
        <Link to={"/profile"}><img src="../../public/img/profile.jpg" alt="" /></Link>
      </nav>
      <div className="sideBarIcon" ref={sideBarIconRef}>
        <Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
        <i onClick={handleToggleSideBar} className="fa-solid fa-bars"></i>
      </div>
      <div className="sideBar" ref={sideBarRef}>
        <Link to={"/profile"}><img src="../../public/img/profile.jpg" alt="" /></Link>
        <Link to={"/"} >Home</Link>
        <Link to={"order"} >Order</Link>
        <Link to={"/myCodes"} >My Codes</Link>
        <Link to={"#"} >Support</Link>
      </div>
    </header>
  );
}

export default Header;
