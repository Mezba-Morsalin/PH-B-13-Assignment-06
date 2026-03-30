import React from 'react';
import userPng from '../../Resources/user.png'
import packagePng from '../../Resources/package.png'
import rocketImg from '../../Resources/rocket.png'

const Step = () => {
    return (
        
        <section className='w-11/12 lg:w-10/12 mx-auto mt-28'>
            <div className='text-center space-x-3'>
                <h2 className='font-bold text-4xl md:text-5xl text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-base'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                <div className='shadow-[0px_0px_12px_rgba(0,0,0,0.1)] p-7 rounded-2xl relative'>
                    <p className='bg-linear-to-r from-violet-600 to-indigo-600 p-3 rounded-full text-white absolute top-5 right-10'>01</p>
                    <div className='flex flex-col justify-center items-center space-y-2.5 mt-16'>
                        <img className='bg-violet-100 p-4 rounded-full' src={userPng} alt="" />
                        <h3 className='text-2xl text-[#101727] font-bold'>Create Account</h3>
                        <p className='text-[#627382] text-base text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_12px_rgba(0,0,0,0.1)] p-7 rounded-2xl relative'>
                    <p className='bg-linear-to-r from-violet-600 to-indigo-600 p-3 rounded-full text-white absolute top-5 right-10'>02</p>
                    <div className='flex flex-col justify-center items-center space-y-2.5 mt-16'>
                        <img className='bg-violet-100 p-4 rounded-full' src={packagePng} alt="" />
                        <h3 className='text-2xl text-[#101727] font-bold'>Choose Products</h3>
                        <p className='text-[#627382] text-base text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className='shadow-[0px_0px_12px_rgba(0,0,0,0.1)] p-7 rounded-2xl relative'>
                    <p className='bg-linear-to-r from-violet-600 to-indigo-600 p-3 rounded-full text-white absolute top-5 right-10'>03</p>
                    <div className='flex flex-col justify-center items-center space-y-2.5 mt-16'>
                        <img className='bg-violet-100 p-4 rounded-full' src={rocketImg} alt="" />
                        <h3 className='text-2xl text-[#101727] font-bold'>Start Creating</h3>
                        <p className='text-[#627382] text-base text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step;