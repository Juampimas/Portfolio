import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SobreMi from './components/SobreMi'
import Educacion from './components/Educacion'
import Habilidades from './components/Habilidades'
import Footer from './components/Footer'
import Proyectos from './components/Proyectos'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)  
    },2000)
  },[]);

  return (
    <>
      {loading ?
      <Loader />
      :
      <>
        <Navbar />
        <Banner />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Educacion />
        <Footer />
      </>
      }     
    </>
  )
}

export default App