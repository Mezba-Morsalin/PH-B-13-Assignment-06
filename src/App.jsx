import { Suspense } from 'react'
import './App.css'
import Hero from './assets/components/Hero/hero'
import Navbar from './assets/components/Navbar/navbar'
import Rating from './assets/components/Rating/rating'
import Tools from './assets/components/Digi Tools/tools'


const data = fetch('tools.json').then(res => res.json())
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Suspense fallback = {<h1><span className="loading loading-dots loading-xl flex justify-center items-center min-h-screen"></span></h1>}>
     <Tools key={data.id} data = {data}></Tools>
     </Suspense>
    </>
  )
}

export default App
