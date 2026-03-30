import { Suspense } from 'react'
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
  return (
    <>
     <Navbar key={data.id} data = {data}></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Suspense fallback = {<span className="loading loading-dots loading-xl flex justify-center items-center min-h-screen"></span>}>
     <Tools key={data.id} data = {data}></Tools>
     </Suspense>
     <Step></Step>
     <Pricing></Pricing>
     <WorkFlow></WorkFlow>
     <Footer></Footer>
    </>
  )
}

export default App
