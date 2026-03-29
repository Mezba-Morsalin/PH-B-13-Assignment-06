import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import bannerImg from '../../Resources/banner.png'
const Hero = () => {

    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-24'>
            <div className='flex flex-col lg:flex-row gap-12 justify-between items-center'>
                <div className='space-y-4'>
                <p className='w-70 text-base text-violet-600 flex gap-2.5 items-center bg-violet-100 p-2 rounded-full'><FaRegDotCircle></FaRegDotCircle> New: AI-Powered Tools Available</p>
                <h2 className='text-[#101727] text-4xl md:text-7xl font-bold lg:w-3xl leading-12 md:leading-20'>Supercharge Your Digital Workflow</h2>
                <p className='text-[#627382] text-base leading-7 lg:w-2xl'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>
                <div className='flex gap-3'>
                    <button className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-3 md:p-4 rounded-full font-bold cursor-pointer'>Explore Products</button>
                    <button className='p-2 md:p-3 rounded-full font-bold cursor-pointer border-2 border-indigo-600 text-indigo-600  hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white'>Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='shadow-lg' src={bannerImg} alt="" />
            </div>
            </div>
        </section>
    );
};

export default Hero;