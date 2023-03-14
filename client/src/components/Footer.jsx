import React from 'react'
import {Link} from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {

  const [t] = useTranslation("global")

  const [copied, setCopied] = useState(false)

  function copiado(){
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    },2000)
  }

  return (
    <footer>
        <CopyToClipboard text='juampim98@gmail.com'>
          <div onClick={() => {copiado()}} className="footer-circle">
              <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1014 0H3.05951C1.3725 0 0 1.3725 0 3.05946V15.9405C0 17.6275 1.3725 19 3.05951 19H22.1014C23.7885 19 25.1609 17.6275 25.1609 15.9405V3.05946C25.1609 1.3725 23.7885 0 22.1014 0ZM20.6355 1.02693L12.5735 7.54361L4.51157 1.02693H20.6355ZM21.0392 17.973H4.10792V5.98049L12.2514 12.5405C12.4394 12.692 12.7077 12.692 12.8957 12.5405L21.0391 5.98049V17.973H21.0392ZM24.134 15.9405C24.134 17.0612 23.2222 17.973 22.1014 17.973H22.0662V4.90746C22.0662 4.70976 21.9527 4.52966 21.7743 4.4443C21.5959 4.35889 21.3844 4.38361 21.2306 4.50759L12.5735 11.4813L3.91651 4.50759C3.76249 4.38361 3.55099 4.35889 3.37275 4.4443C3.19436 4.52966 3.08089 4.70976 3.08089 4.90746V17.973H3.05946C1.93877 17.973 1.02698 17.0612 1.02698 15.9405V3.05946C1.02698 1.99671 1.84707 1.12236 2.88756 1.03479L12.2508 8.60332C12.3449 8.67944 12.4592 8.71748 12.5735 8.71748C12.6879 8.71748 12.8022 8.67944 12.8963 8.60332L22.2607 1.03376C23.3072 1.11534 24.134 1.99238 24.134 3.05941V15.9405Z" fill="#27DEBF"/>
              </svg>
              {copied && <div className="copiado"><p>{t("footer.copy_text")}</p></div>}
          </div>
        </CopyToClipboard>
        <Link to="https://github.com/Juampimas" target="_blank">
          <div className="footer-circle">
              <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 19.0268C3 20.5268 3 16.5268 1 16.0268M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268" stroke="#27DEBF" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/juan-pablo-mas-157073211/" target="_blank">
          <div className="footer-circle">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8H1V20H5V8Z" stroke="#27DEBF" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 8C13.6 8 12.7 8.3 12 8.8V8H8V20H10H12V13.5C12 12.7 12.7 12 13.5 12C14.3 12 15 12.7 15 13.5V20H19V12.5C19 10 17 8 14.5 8Z" stroke="#27DEBF" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="#27DEBF" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </div>
        </Link>
        
    </footer>
  )
}

export default Footer