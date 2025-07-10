import React from 'react';
import { iphoneModels } from '../data/index';

const IPhone = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-start bg-white p-8'>
        <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-700 my-8'>
            Choose your new iPhone.
        </h1>
        <div className='flex justify-between w-full'>
            {
                iphoneModels.map((phone, index) => (
                    <div key={phone.name} className='flex flex-col items-center justify-center gap-y-2'>
                        <img src={phone.img} alt={phone.name} draggable='false' className='2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain'/>
                        <a href='#' className='2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-slate-700 mt-4 cursor-default'>
                            {phone.name}
                        </a>
                        <p className='2xl:text-lg xl:text-base lg:text-sm text-sm text-center text-gray-700 mt-2'>
                            {phone.description}
                        </p>
                        <p className='2xl:text-base xl:text-sm lg:text-sm text-violet-500 mt-2 cursor-default'>
                            {phone.price}
                        </p>
                        <button type='button' className='text-sm mt-4 px-4 py-2 bg-violet-500 text-white rounded-full cursor-pointer'>
                            Buy Now
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default IPhone;