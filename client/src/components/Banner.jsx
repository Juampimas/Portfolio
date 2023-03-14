import React from 'react'
import {HashLink as Link} from "react-router-hash-link";
import { useTranslation } from 'react-i18next';

function Banner() {

  const [t] = useTranslation("global")

  return (
    <div className="banner">
        <div className="banner-text">
            <h1>{t("banner.banner_title")}<span>{t("banner.banner_title2")}</span>{t("banner.banner_title3")}<span>{t("banner.banner_title4")}</span></h1>
            <p>{t("banner.banner_text")}</p>
        </div>
        <img src="./banner-img.png" alt="Banner img" />
        <Link to={"#sobreMi"}>
        <div className="dropdown">
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 13C10.7369 13 10.4824 12.9504 10.2364 12.8511C9.98912 12.7519 9.78326 12.6196 9.61883 12.4542L0.5426 3.32443C0.180866 2.96056 0 2.49745 0 1.93511C0 1.37277 0.180866 0.909668 0.5426 0.545801C0.904334 0.181933 1.36472 0 1.92377 0C2.48281 0 2.9432 0.181933 3.30493 0.545801L11 8.28626L18.6951 0.545801C19.0568 0.181933 19.5172 0 20.0762 0C20.6353 0 21.0957 0.181933 21.4574 0.545801C21.8191 0.909668 22 1.37277 22 1.93511C22 2.49745 21.8191 2.96056 21.4574 3.32443L12.3812 12.4542C12.1839 12.6527 11.9701 12.7929 11.7399 12.875C11.5097 12.9583 11.2631 13 11 13Z" fill="#27DEBF"/>
            </svg>
        </div>
        </Link>
    </div>
  )
}

export default Banner