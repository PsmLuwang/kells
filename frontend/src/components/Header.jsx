import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

function Header() {
  const { user, isAuthenticated } = useAuthStore();

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
    <>
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
        <nav className='text-[0.8rem]'>
          <Link to={"/"} >Home</Link>
          <Link className='relative'
            to={"/cart"} >
            Cart 
            <span className='absolute top-[-10px] right-[-12px] bg-red-600 text-[0.7rem] w-4 h-4 grid place-items-center p-0 rounded-2xl'>
              8
            </span>
          </Link>
          <Link to={"/order"} >Order</Link>
          <Link to={"/myCodes"} >My Codes</Link>
          <Link to={"#"} >Support</Link>
          {isAuthenticated && user.role === "admin" && (<Link to={"/adminPanel/dashboard"}>Admin Panel</Link>)}
          
          <div >
            {
              isAuthenticated 
              ? <Link className='bg-orange-400 h-9 w-9 font-semibold text-[1.5rem] rounded-[50%]'
                to={"/profile"}>
                  {user.name[0].toUpperCase()}
                </Link>
              : <Link className='bg-orange-400 px-3 py-1 rounded-2xl'
                to={"/login"}>
                  Login
                </Link>
            }
          </div>
        </nav>
        <div className="sideBarIcon" ref={sideBarIconRef}>
          <Link className='relative'
            to={"/cart"}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='absolute top-[-6px] right-[-8px] bg-red-600 text-[0.7rem] w-4 h-4 grid place-items-center p-0 rounded-2xl'>
              8
            </span>
          </Link>
          <i onClick={handleToggleSideBar} className="fa-solid fa-bars"></i>
        </div>
        
      </header>
      <div className="sideBar text-[0.8rem]" 
        ref={sideBarRef}
      >
        <div >
          {
            isAuthenticated 
            ? <Link className='bg-orange-400 h-9 w-9 font-semibold text-[1.5rem] rounded-[50%] mx-auto'
              to={"/profile"}>
                {user.name[0].toUpperCase()}
              </Link>
            : <Link className='bg-orange-400 px-3 py-1 rounded-2xl'
              to={"/login"}>
                Login
              </Link>
          }
        </div>
        <Link to={"/"} >Home</Link>
        <Link to={"/order"} >Order</Link>
        <Link to={"/myCodes"} >My Codes</Link>
        <Link to={"#"} >Support</Link>
        {isAuthenticated && user.role === "admin" && (<Link to={"/adminPanel/dashboard"}>Admin Panel</Link>)}
      </div>
    </>
  );
}

export default Header;
