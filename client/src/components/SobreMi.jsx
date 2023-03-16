import React from 'react'
import { useTranslation } from 'react-i18next';

import sobreMi_img from "../imgs/sobremi-img.png"

function SobreMi() {

const [t] = useTranslation("global")

  return (
    <div id='sobreMi'>
        <div className="sobreMi-text">
            <div className="sobreMi-desc">
                <h3>{t("sobreMi.sobreMi_subTitle")}</h3>
                <h2>{t("sobreMi.sobreMi_title")}</h2>
                <p>{t("sobreMi.sobreMi_text1")}</p>
                <p>{t("sobreMi.sobreMi_text2")}</p>
            </div>
            <div className="sobreMi-items">
                <div className="sobreMi-items1">
                    <p><span>{t("sobreMi.sobreMi_item1")}</span> {t("sobreMi.sobreMi_item1-1")}</p>
                    <p><span>{t("sobreMi.sobreMi_item2")}</span> {t("sobreMi.sobreMi_item2-2")}</p>
                    <p><span>{t("sobreMi.sobreMi_item3")}</span> {t("sobreMi.sobreMi_item3-3")}</p>
                </div>
                <div className="sobreMi-items2">
                    <p><span>{t("sobreMi.sobreMi_item4")}</span> {t("sobreMi.sobreMi_item4-4")}</p>
                    <p><span>{t("sobreMi.sobreMi_item5")}</span> {t("sobreMi.sobreMi_item5-5")}</p>
                    <p><span>{t("sobreMi.sobreMi_item6")}</span> {t("sobreMi.sobreMi_item6-6")}</p>
                </div>
            </div>
        </div>
        <img src={sobreMi_img} alt="sobremi-img" />
    </div>
  )
}

export default SobreMi