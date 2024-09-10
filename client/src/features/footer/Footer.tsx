import React from 'react';
import './style/style.css';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidToTop } from 'react-icons/bi';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import DentistryMap, { Map } from '../map/DentistryMap';

function Footer(): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer" id="footer">
      <div className="box-container">
        <DentistryMap />
        <div className="box">
          <h3>Навигация</h3>
          <li className="footeritem">
            <NavLink onClick={scrollToTop} className="footerlink" to="/">
              На главную
            </NavLink>
          </li>
          {/* <li className="footeritem">
            <NavLink className="footerlink" to="/services">
              Сервисы
            </NavLink>
          </li>

          <li className="footeritem">
            <NavLink className="footerlink" to="/news">
              Статьи
            </NavLink>
          </li>

          <li className="footeritem">
            <NavLink className="footerlink" to="/sales">
              Акции
            </NavLink>
          </li> */}
        </div>
        <div className="box2">
          <h3>Контакты</h3>
          <a href="#">
            {' '}
            <i className="fas fa-phone" />
            <FaPhone
              style={{
                color: 'green',
                fontSize: '30px',
              }}
            />
            +79956002790{' '}
          </a>
          <a href="#">
            {' '}
            <i className="fas fa-envelope" />
            <MdEmail
              style={{
                color: 'yellow',
                fontSize: '30px',
              }}
            />{' '}
            leodent@yandex.ru{' '}
          </a>

          <a href="https://wa.me/79956002790?text=Здравствуйте%2C+пишу+с+сайта">
            {' '}
            <i className="whatsapp" />{' '}
            <FaWhatsappSquare
              style={{
                color: 'green',
                fontSize: '30px',
              }}
            />
            Whatsapp{' '}
          </a>
          <a href="https://t.me/ctulhufhtagn">
            {' '}
            <i className="fab tg" />
            <FaTelegram
              style={{
                color: 'blue',
                fontSize: '30px',
              }}
            />
            Telegram{' '}
          </a>
        </div>

        <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <BiSolidToTop className='totop'   />
        
        </button>
      </div>
    </div>
  );
}

export default Footer;
