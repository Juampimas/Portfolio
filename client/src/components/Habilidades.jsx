import React from 'react'
import { useTranslation } from 'react-i18next'

function Habilidades() {

const [t] = useTranslation("global");

  return (
    <div id="habilidades">
        <div className="hab-text">
            <h3>{t("habilidades.hab_subTitle")}</h3>
            <h2>{t("habilidades.hab_title")}</h2>
        </div>
        <div className="hab-container">
            <div className="hab-item">
                <h3>{t("habilidades.hab_item1_title")}</h3>
                <ul>
                    <li>{t("habilidades.hab_item1_li1")}</li>
                    <li>{t("habilidades.hab_item1_li2")}</li>
                    <li>{t("habilidades.hab_item1_li3")}</li>
                    <li>{t("habilidades.hab_item1_li4")}</li>
                    <li>{t("habilidades.hab_item1_li5")}</li>
                </ul>
            </div>
            <div className="hab-item hab-item2">
                <h3>{t("habilidades.hab_item2_title")}</h3>
                <ul>
                    <li>{t("habilidades.hab_item2_li1")}</li>
                    <li>{t("habilidades.hab_item2_li2")}</li>
                    <li>{t("habilidades.hab_item2_li3")}</li>
                    <li>{t("habilidades.hab_item2_li4")}</li>
                    <li>{t("habilidades.hab_item2_li5")}</li>
                    <li>{t("habilidades.hab_item2_li6")}</li>
                </ul>
                <h4>{t("habilidades.hab_item2_subTitle")}</h4>
                <ul className='ul-hab-item'>
                    <li>{t("habilidades.hab_item2_li7")}</li>
                    <li>{t("habilidades.hab_item2_li8")}</li>
                </ul>
            </div>
            <div className="hab-item hab-item2">
                <h3>{t("habilidades.hab_item3_title")}</h3>
                <ul>
                    <li>{t("habilidades.hab_item3_li1")}</li>
                    <li>{t("habilidades.hab_item3_li2")}</li>
                    <li>{t("habilidades.hab_item3_li3")}</li>
                </ul>
                <h4>{t("habilidades.hab_item3_subTitle")}</h4>
                <ul className='ul-hab-item'>
                    <li>{t("habilidades.hab_item3_li4")}</li>
                    <li>{t("habilidades.hab_item3_li5")}</li>
                    <li>{t("habilidades.hab_item3_li6")}</li>
                </ul>
            </div>
            <div className="hab-item">
                <h3>{t("habilidades.hab_item4_title")}</h3>
                <ul>
                    <li>{t("habilidades.hab_item4_li1")}</li>
                    <li>{t("habilidades.hab_item4_li2")}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Habilidades