import { useState } from 'react'
import './App.css'
import Hero from './assets/components/Hero/hero'
import Navbar from './assets/components/Navbar/navbar'
import Rating from './assets/components/Rating/rating'
import Tools from './assets/components/Digi Tools/tools'
import Step from './assets/components/Steps/step'
import Pricing from './assets/components/Pricing/pricing'
import WorkFlow from './assets/components/Workflow/workflow'
import Footer from './assets/components/Footer/footer'


const data = fetch('tools.json').then(res => res.json())
function App() {
  const [selectCart, setSelectCart] = useState([])
  return (
    <>
     <Navbar selectCart = {selectCart} setSelectCart = {setSelectCart}></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Tools data={data} selectCart={selectCart} setSelectCart={setSelectCart}/>
     <Step></Step>
     <Pricing></Pricing>
     <WorkFlow></WorkFlow>
     <Footer></Footer>
    </>
  )
}

export default App
