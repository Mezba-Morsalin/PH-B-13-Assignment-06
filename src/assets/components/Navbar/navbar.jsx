import React, { useState } from 'react';
import Links from './links';
import { IoCart } from 'react-icons/io5';
import { RiCloseCircleLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { use } from 'react';
const navLinks = [
  {
    "name": "Products",
    "id": 1,
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
const Navbar = ({data}) => {
    const dataLength = use(data)
    const [changeColor, setChangeColor] = useState(true)
    const [open, setOpen] = useState(false)
    const links = navLinks.map(navLink => <Links key={navLink.id} navLink = {navLink}></Links>)
    return (
        <header className='shadow-[0_2px_7px_rgba(0,0,0,0.1)]'>
            <nav className='flex justify-between items-center w-11/12 lg:w-10/12 mx-auto py-4'>
                <div  className='flex gap-2 items-center'>
                    {
                        open ? <RiCloseCircleLine onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer text-indigo-600'></RiCloseCircleLine> : <GiHamburgerMenu onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer text-indigo-600'></GiHamburgerMenu>
                    }
                    <ul className={`lg:hidden absolute top-22 bg-white shadow p-4 rounded space-y-4 ${open ? "block" : "hidden"}`}>
                        {
                            links
                        }
                    </ul>
                    <h2 className='text-3xl md:text-4xl font-bold bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'><a href="#">DigiTools</a></h2>
                </div>
                <ul className='lg:flex hidden items-center gap-5'>
                    {
                        links
                    }
                </ul>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <button className=' btn text-indigo-600 rounded-full text-base md:text-2xl p-4 md:px-5 md:py-6'><IoCart className='relative'></IoCart></button>
    
                            <p className='bg-red-500 text-white p-2 rounded-full text-[11px] absolute top-0'> {dataLength.length}</p>
                        
                    </div>
                    <div className=" rounded-full border border-gray-200">
                        <button onClick={() => setChangeColor(false)} className={` ${changeColor ?  " text-black font-bold rounded-full p-2 md:p-2 cursor-pointer text-[12px] md:text-lg" :  "bg-linear-to-r from-violet-600 to-indigo-600 text-white p-2 md:p-2 text-[12px] md:text-lg rounded-full font-bold cursor-pointer"} `}>Login</button>
                    <button onClick={() => setChangeColor(!false)} className={` ${changeColor ?  "bg-linear-to-r from-violet-600 to-indigo-600 text-white p-2 md:p-2 rounded-full font-bold cursor-pointer text-[12px] md:text-lg" :  "text-black font-bold rounded-full p-2 md:p-2 cursor-pointer text-[12px] md:text-lg"} `}>Get Started</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;