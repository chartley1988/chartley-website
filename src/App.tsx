import { useState } from 'react'
import Header from './components/header/header'
import NavMenu from './components/nav_menu/nav_menu'
import "./styles/main.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      <main>
        <p>
        Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
        </p>

        <p>
        Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
        </p>

        <p>
        Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
        </p>

        <p>
        Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
        </p>

        <p>
        Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph and realized it was about random paragraphs and his world would never be the same.
        </p>
      </main>
    </>
  )
}

export default App
