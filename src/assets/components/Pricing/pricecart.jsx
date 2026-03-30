import React from 'react';
import { TiTick } from 'react-icons/ti';

const PriceCart = ({price}) => {
    return (
        <div className={price.badge 
  ? "relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-7 rounded-2xl shadow-[0px_0px_12px_rgba(0,0,0,0.1)]" 
  : "bg-white p-7 rounded-2xl shadow-[0px_0px_12px_rgba(0,0,0,0.1)]"}>
     <p className={price.badge 
  ? "bg-amber-200 p-2 rounded-2xl text-orange-600 w-34 font-bold absolute -top-5 text-center" 
  : "hidden"}>{price.badge}</p>
  <h3 className='text-2xl font-bold mb-3'>{price.name}</h3>
  <p className= {price.badge ? "text-white mb-3" : "text-[#627382] text-base mb-3"}>{price.tag}</p>
  <p className='mb-3'><span className='font-bold text-4xl'>${price.price}</span><span className= {price.badge ? "text-white mb-3" : "text-[#627382] text-base mb-3"}>/{price.billing}</span></p>

  <div className='space-y-2 mb-5'>
    {
    price.features?.map((feature, index) => (
      <p className='flex items-center gap-2' key={index}>
        <TiTick className= {price.badge ? "text-white" : " text-green-500"} /> {feature}
      </p>
    ))
  }
  </div>

  <button className={price.badge 
  ? "bg-white p-3 rounded-2xl text-indigo-500 w-full font-bold" 
  : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-3 rounded-2xl w-full font-bold"}>
    {price.buttonText}
  </button>

</div>
    );
};

export default PriceCart;