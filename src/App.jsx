
import { Router } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Products/>
      <Recipes/>
      <Footer/>
    </div>
  )
}

export default App
