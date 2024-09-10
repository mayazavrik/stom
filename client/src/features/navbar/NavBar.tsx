import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut } from '../logreg/AuthSlice';
import style from './style/Navbar.module.css';
import './style/style.css';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import pic from "../main/style/LeoDent_logo.png"

import Footer from '../footer/Footer';


function NavBar(): JSX.Element {
  const [nav, setNav] = useState(false);
  const closeMenu = () => {
    setNav(false); 
  };
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);


  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Закрыть меню после клика
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); // Закрыть меню после клика
  };

  const onHandleLogout = async (): Promise<void> => {
    try {
      await dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <img className='picnav' src={pic} alt='pic' />
     
        <div className={style.box}>
      
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu].join(' ')
            }
          >
            <li className="nav-item">
              <NavLink onClick={scrollToTop}  className="navlink" to="/">
                На главную
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={scrollToTop}   className="navlink" to="/services">
                Услуги
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={scrollToTop}   className="navlink" to="/doctors">
                Врачи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={scrollToFooter}  className="navlink" to="#footer">
                Контакты
              </NavLink>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <button className="navlink" onClick={onHandleLogout}>
                    Выйти
                  </button>
                </li>
                {user && <div className="nav-hello">Привет, {user.name}</div>}
              </>
            ) : (
              <li className="nav-item">
                {/* <NavLink className="navlink" to="reg">
                  Вход
                </NavLink> */}
              </li>
            )}
           

         
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}

export default NavBar;

