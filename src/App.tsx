import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NavMenu from './components/nav_menu/nav_menu'
import AboutMe from './components/pages/about_me/about_me'
import Home from './components/pages/home/home'
import "./styles/main.css"
import { Outlet } from 'react-router'


function App() {

  return (
    <>
      <Header />
      <NavMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}



export default App
