import React from 'react'
import {Link} from "react-router-dom"

function Banner() {
  return (
    <div className="banner">
        <div className="banner-text">
            <h1>Hola me llamo <span>Juan Pablo Mas</span> y soy <span>Desarrollador Full Stack</span></h1>
            <p>Soy un Desarrollador Full Stack, particularmente MERN con conocimientos en Diseño Web.</p>
            <Link className='banner-btn'>CONTACTO</Link>
        </div>
        <img src="./banner-img.png" alt="Banner img" />
    </div>
  )
}

export default Banner