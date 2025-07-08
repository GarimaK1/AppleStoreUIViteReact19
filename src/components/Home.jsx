import React from 'react';
import { items } from '../data/index';

const Home = () => {
    return (
        <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-slate-50'>
            {
                items.map((item) => (
                    <div key={item.label} className='flex flex-col flex-grow items-center justify-center bg-white'>
                        <span className='text-xl font-bold text-[#bc3c78] tracking-wide mb-1'>
                            {item.label}
                        </span>
                        <img src={item.img} className='w-2/3 h-2/3 object-contain' alt={item.label} draggable='false' />
                    </div>
                ))
            }
        </div>
    )
}

export default Home