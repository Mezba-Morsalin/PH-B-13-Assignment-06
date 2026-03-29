import React, { useState } from 'react';
import Links from './links';
import { IoCart } from 'react-icons/io5';
const navLinks = [
  {
    "name": "Products",
    "id": 2,
    "path": "/products"
  },
  {
    "name": "Features",
    "id": 2,
    "path": "/features"
  },
  {
    "name": "Pricing",
    "id": 3,
    "path": "/pricing"
  },
  {
    "name": "Testimonials",
    "id": 4,
    "path": "/testimonials"
  },
  {
    "name": "FAQ",
    "id": 5,
    "path": "/faq"
  }
]
const Navbar = () => {
    const [changeColor, setChangeColor] = useState(true)
    const links = navLinks.map(navLink => <Links key={navLink.id} navLink = {navLink}></Links>)
    return (
        <header className='shadow-[0_2px_7px_rgba(0,0,0,0.1)]'>
            <nav className='flex justify-between items-center'>
                <div>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'><a href="#">DigiTools</a></h2>
                </div>
                <ul className='md:flex hidden items-center gap-5'>
                    {
                        links
                    }
                </ul>
                <div className='flex items-center gap-2.5'>
                    <button className=' btn text-indigo-600 rounded-full text-2xl p-4 md:px-5 md:py-6'><IoCart></IoCart></button>
                    <div className=" rounded-full border border-gray-200">
                        <button onClick={() => setChangeColor(false)} className={` ${changeColor ?  " text-black font-bold rounded-full p-2 md:p-3 cursor-pointer" :  "bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-2 md:p-3 rounded-full font-bold cursor-pointer"} `}>Login</button>
                    <button onClick={() => setChangeColor(!false)} className={` ${changeColor ?  "bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-2 md:p-3 rounded-full font-bold cursor-pointer" :  "text-black font-bold rounded-full p-2 md:p-3 cursor-pointer"} `}>Get Started</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;