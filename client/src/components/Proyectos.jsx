import React from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom"

function Proyectos() {

const [t] = useTranslation("global")

  return (
    <div id="proyectos">
        <div className="pro-text">
            <h3>{t("proyectos.pro_subTitle")}</h3>
            <h2>{t("proyectos.pro_title")}</h2>
        </div>
        <div className="pro-container">
        <div className="pro-sub-container">
                <div className="pro-item">
                    <div className="pro-img">
                        
                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item1_title")}</h4>
                        <p>{t("proyectos.pro_item1_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item1_year")}</p>
                            <Link className='btn-site' to="https://juampimas.github.io/portfolioMas/" target="_blank">
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-img">

                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item6_title")}</h4>
                        <p>{t("proyectos.pro_item6_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item6_year")}</p>
                            <Link className='btn-site' to="https://www.animus.is/" target="_blank">
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro-sub-container">
                <div className="pro-item">
                    <div className="pro-img">
                        
                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item5_title")}</h4>
                        <p>{t("proyectos.pro_item5_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item5_year")}</p>
                            <Link to="https://juampimas.github.io/Animus/" target="_blank" className='btn-site'>
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-img">

                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item2_title")}</h4>
                        <p>{t("proyectos.pro_item2_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item2_year")}</p>
                            <Link className='btn-site' to="https://universe.boid.com/" target="_blank">
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro-sub-container">
                <div className="pro-item">
                    <div className="pro-img">
                        
                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item3_title")}</h4>
                        <p>{t("proyectos.pro_item3_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item3_year")}</p>
                            <Link className='btn-site' to="http://tmrepresentaciones.com/" target="_blank">
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-img">

                    </div>
                    <div className="pro-desc">
                        <h4>{t("proyectos.pro_item4_title")}</h4>
                        <p>{t("proyectos.pro_item4_text")}</p>
                        <div className="pro-footer">
                            <p><span>{t("proyectos.pro_item_year")}</span> {t("proyectos.pro_item4_year")}</p>
                            <Link className='btn-site'>
                                <div className="pro-btn">
                                    <p>{t("proyectos.pro_item_btn")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proyectos