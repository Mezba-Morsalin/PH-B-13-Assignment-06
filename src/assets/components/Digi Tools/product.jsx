import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { TiTick } from 'react-icons/ti';

const Product = ({ toolData, selectCart, setSelectCart }) => {

    const isInCart = selectCart.find((item) => item.id === toolData.id);

    const handleBuy = () => {
        setSelectCart([...selectCart, toolData]);
        toast.success(`${toolData.name} has been added to your cart`);
    };

    return (
        <div className='space-y-3.5 shadow-[0px_0px_12px_rgba(0,0,0,0.1)] p-7 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <img className='h-14 w-14 border border-gray-200 rounded-full p-3' src={toolData.image} alt=""/>
                <p className={`${ toolData.tag === "Best Seller"
                            ? "bg-yellow-200 text-orange-400 py-2 px-4 rounded-full"
                            : toolData.tag === "Popular"
                            ? "bg-indigo-100 text-violet-400 py-2 px-4 rounded-full"
                            : "bg-green-100 text-green-500 py-2 px-4 rounded-full"}`}>
                    {toolData.tag}
                </p>
            </div>
            <h2 className='text-[#101727] font-bold text-2xl'>{toolData.name}</h2>
            <p className='text-[#627382] text-base leading-7'>{toolData.description}</p>
            <p className='text-2xl text-[#101727] font-bold'>${toolData.price}</p>
            {toolData.features.map((feature, index) => (
                <p key={index} className='flex items-center gap-2 text-[#627382] text-base'><TiTick className='text-green-500' />
                    {feature}
                </p>
            ))}

            <button onClick={handleBuy} disabled={isInCart} className={ isInCart
                        ? "w-full p-4 text-xl bg-gray-200 text-black/20 rounded-2xl font-bold cursor-not-allowed"
                        : "w-full p-4 text-xl bg-linear-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-bold  cursor-pointer"}>
                {isInCart ? "Purchased" : "Buy now"}
            </button>

            <Toaster />
        </div>
    );
};

export default Product;