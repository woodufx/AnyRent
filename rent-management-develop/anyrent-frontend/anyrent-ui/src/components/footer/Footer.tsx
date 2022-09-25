import Logo from "../logo/Logo";
import "./footer.less";

import vkontakte from "../../assets/styles/img/vkontakte.png";
import instagram from "../../assets/styles/img/instagram.png";
import odnoklassniki from "../../assets/styles/img/odnoklassniki.png";
import telegram from "../../assets/styles/img/telegram.png";

import testLogo from "../../assets/styles/img/testLogo.png";
import SvgIcon from "../svgIcon/SvgIcon";

const Footer = () => {
  return (
    <div className="ar-footer">

      <div className="ar-footer-conainer">

        <div className="ar-footer__logo-container">
          <Logo style="white-text" />
        </div>

        <div className="ar-footer__content">

          <div className="ar-footer__menu">
            <ul className="ar-footer__menu-list">
              <li className="menu-list__item--title">Company</li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">About us</a>
              </li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">Our team</a>
              </li>
              <li className="menu-list__item menu-list__item--last">
                <a className="menu-list__item-link" href="">Awards</a>
              </li>
            </ul>
          </div>

          <div className="ar-footer__menu">
            <ul className="ar-footer__menu-list">
              <li className="menu-list__item--title">Developers</li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">New features</a>
              </li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">Web Docks</a>
              </li>
              <li className="menu-list__item menu-list__item--last">
                <a className="menu-list__item-link" href="">Tools</a>
              </li>
            </ul>
          </div>

          <div className="ar-footer__menu">
            <ul className="ar-footer__menu-list">
              <li className="menu-list__item--title">Resourses</li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">Privacy</a>
              </li>
              <li className="menu-list__item menu-list__item--last">
                <a className="menu-list__item-link" href="">Contact</a>
              </li>
            </ul>
          </div>

          <div className="ar-footer__menu">
            <ul className="ar-footer__menu-list">
              <li className="menu-list__item--title">Product Help</li>
              <li className="menu-list__item">
                <a className="menu-list__item-link" href="">Support</a>
              </li>
              <li className="menu-list__item menu-list__item--last">
                <a className="menu-list__item-link" href="">File a Bug</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="ar-footer__white-line"></div>

        <div className="ar-footer__bottom">

          <div className="bottom__copyright">
            <p className="bottom__copyright-text">©2022 AnyRent Inc. All Rights Reserved</p>
          </div>

          <div className="bottom__social-networks">

            <img title="Вконтакте" className="social-networks__item-link" src={vkontakte} alt="" />
            <img title="Инстаграм" className="social-networks__item-link" src={instagram} alt="" />
            <img title="Одноклассники" className="social-networks__item-link" src={odnoklassniki} alt="" />
            <img title="Телеграм" className="social-networks__item-link" src={telegram} alt="" />

          </div>

          <div className="bottom__terms">
            <a className="bottom__terms-link" href="">Terms of Service</a>
            <a className="bottom__terms-link" href="">Privacy Policy</a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer;