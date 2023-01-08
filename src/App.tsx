import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NavMenu from './components/nav_menu/nav_menu'
import AboutMe from './components/pages/about_me/about_me'
import Home from './components/pages/home/home'
import "./styles/main.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavMenu />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default App
