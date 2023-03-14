import React, {useState} from 'react'
import {HashLink as Link} from "react-router-hash-link"
import { useTranslation } from 'react-i18next';



const archivo_cv = "http://localhost:3000/CV-JuanPabloMas.pdf";

function Navbar() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }

  function descargarArchivo(url){
    const nombreArchivo = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", nombreArchivo);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};

const [t, i18n] = useTranslation("global")

  return (
    <header className='navbar' id='inicio'>
            <nav className={`${clicked ? "open-nav" : ""}`}>
              <svg onClick={handleClick} className="close" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="20.1009" y1="2.11892" x2="2.11892" y2="21.8991" stroke="#27DEBF" strokeWidth="3" strokeLinecap="round"/>
                <line x1="20.1009" y1="21.8991" x2="1.8991" y2="2.11892" stroke="#27DEBF" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <ul>
                <li>
                  <Link to="#inicio" onClick={handleClick} className='link'>{t("navbar.nav_link1")}</Link>
                </li>
                <div className="line"></div>
                <li>
                  <Link to="#sobreMi" onClick={handleClick} className='link'>{t("navbar.nav_link2")}</Link>
                </li>
                <div className="line"></div>
                <li>
                  <Link to="#proyectos" onClick={handleClick} className='link'>{t("navbar.nav_link3")}</Link>
                </li>
                <div className="line"></div>
                <li>
                  <Link to="#habilidades" onClick={handleClick} className='link'>{t("navbar.nav_link4")}</Link>
                </li>
                <div className="line"></div>
                <li>
                  <Link to="#educacion" onClick={handleClick} className='link'>{t("navbar.nav_link5")}</Link>
                </li>
              </ul>
              <div className="idioma">
                <div onClick={() => i18n.changeLanguage("es")} className="idioma-item" data-language='es'>
                  <img src="/es.svg" alt="Español" width="30px" />
                </div>
                <div onClick={() => i18n.changeLanguage("en")} className="idioma-item" data-language='en'>
                  <img src="/us.svg" alt="English" width="30px" />
                </div>
              </div>
            </nav>
            <div onClick={() => {descargarArchivo(archivo_cv)}} className="cv-link">
              <p>{t("navbar.cv_link")}</p>
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7727 8.92857C14.6212 8.78572 14.3939 8.71429 14.1667 8.71429H9.92424L8.71212 9.85714C8.33333 10.1429 7.95455 10.3571 7.5 10.3571C7.04545 10.3571 6.59091 10.2143 6.28788 9.85714L5.07576 8.71429H0.833333C0.606061 8.71429 0.378788 8.78572 0.227273 8.92857C0.0757577 9.07143 0 9.28572 0 9.5V12.2143C0 12.4286 0.0757577 12.6429 0.227273 12.7857C0.378788 12.9286 0.606061 13 0.833333 13H14.1667C14.3939 13 14.6212 12.9286 14.7727 12.7857C14.9242 12.6429 15 12.4286 15 12.2143V9.5C15 9.28572 14.9242 9.07143 14.7727 8.92857ZM11.3636 11.7857C11.2121 11.9286 11.1364 11.9286 10.9848 11.9286C10.8333 11.9286 10.6818 11.8571 10.6061 11.7857C10.4545 11.6429 10.4545 11.5714 10.4545 11.4286C10.4545 11.2857 10.5303 11.1429 10.6061 11.0714C10.7576 10.9286 10.8333 10.9286 10.9848 10.9286C11.1364 10.9286 11.2879 11 11.3636 11.0714C11.5152 11.2143 11.5152 11.2857 11.5152 11.4286C11.5152 11.5714 11.5152 11.7143 11.3636 11.7857ZM13.7121 11.7857C13.5606 11.9286 13.4848 11.9286 13.3333 11.9286C13.1818 11.9286 13.0303 11.8571 12.9545 11.7857C12.803 11.6429 12.803 11.5714 12.803 11.4286C12.803 11.2857 12.8788 11.1429 12.9545 11.0714C13.1061 10.9286 13.1818 10.9286 13.3333 10.9286C13.4848 10.9286 13.6364 11 13.7121 11.0714C13.8636 11.2143 13.8636 11.2857 13.8636 11.4286C13.8636 11.5714 13.7879 11.7143 13.7121 11.7857ZM7.04545 9.07143C7.12121 9.21429 7.27273 9.21429 7.42424 9.21429C7.57576 9.21429 7.72727 9.14286 7.80303 9.07143L11.8939 5.21429C12.0455 5.07143 12.1212 4.85714 12.0455 4.64286C11.9697 4.42857 11.7424 4.28572 11.5152 4.28572H9.16667V0.5C9.16667 0.357143 9.09091 0.214286 9.01515 0.142857C8.86364 2.08616e-07 8.78788 0 8.63636 0H6.28788C6.13636 0 5.98485 0.0714288 5.90909 0.142857C5.75758 0.285715 5.75758 0.357143 5.75758 0.5V4.35714H3.40909C3.18182 4.35714 2.95455 4.5 2.87879 4.71429C2.80303 4.92857 2.80303 5.14286 3.0303 5.28572L7.04545 9.07143Z" fill="#27DEBF"/>
              </svg>
            </div>
            <svg onClick={handleClick} className="menu" width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="32.5" y1="1.5" x2="1.5" y2="1.5" stroke="#27DEBF" strokeWidth="3" strokeLinecap="round"/>
                <line x1="32.5" y1="12.5" x2="1.5" y2="12.5" stroke="#27DEBF" strokeWidth="3" strokeLinecap="round"/>
                <line x1="32.5" y1="23.5" x2="1.5" y2="23.5" stroke="#27DEBF" strokeWidth="3" strokeLinecap="round"/>
            </svg>
    </header>
  )
}

export default Navbar
