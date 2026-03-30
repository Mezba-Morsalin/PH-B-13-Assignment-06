import React, { use, useState } from 'react';
import Product from './product';
import Cart from './cart';
const Tools = ({data}) => {
    const [changeColor, setChangeColor] = useState(true)
    const [selectCart, setSelectCart] = useState([])
    const useData = use(data)
    const toolsData = useData.map(toolData => <Product key={toolData.id} toolData = {toolData}></Product>)
    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-28'>
            <div className='space-y-5'>
                <h2 className='font-bold text-5xl text-center text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-center w-full mx-auto md:w-[480px]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex items-center gap-2.5 justify-center mb-10'>
                    <div className=" rounded-full border border-gray-200">
                    <button onClick={() => setChangeColor(!false)} className={` ${changeColor ?  "bg-linear-to-r from-violet-600 to-indigo-600 text-white p-3 md:p-4 rounded-full font-bold cursor-pointer text-[12px] md:text-lg" :  "text-black font-bold rounded-full p-3 md:p-4 cursor-pointer text-[12px] md:text-lg"} `}>Products</button>
                        <button onClick={() => setChangeColor(false)} className={` ${changeColor ?  " text-black font-bold rounded-full p-3 md:p-4 cursor-pointer text-[12px] md:text-lg" :  "bg-linear-to-r from-violet-600 to-indigo-600 text-white p-3 md:p-4 text-[12px] md:text-lg rounded-full font-bold cursor-pointer"} `}>Cart {selectCart.length}</button>
                    </div>
                </div>
            </div>
            {
                changeColor ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    toolsData
                }
            </div> : <Cart selectCart = {selectCart} setSelectCart = {setSelectCart}></Cart>
            }
        </section>
    );
};

export default Tools;