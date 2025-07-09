import React from 'react';
import { imacModels } from '../data/index';

const IMac = () => {
    return (
        <div className='h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative'>
            <div className='h-full col-span-1 row-span-2 flex flex-col items-center justify-start md:justify-center pt-8 bg-slate-50'>
                <img src="images/imac/green-side.jpg" alt="Green IMac Side"
                    className='2xl:max-w-full xl:max-w-36 max-w-24' />
            </div>
            <div className='bg-slate-50 row-span-1 col-span-1 flex items-center justify-center p-4'>
                <img src="images/imac/green-front.jpg" alt="Green IMac Front"
                    className='2xl:max-w-full xl:max-w-52 max-w-48' />
            </div>
            <div className='bg-slate-50 row-span-1 col-span-1 flex items-center justify-center p-4'>
                <img src="images/imac/green-back.jpg" alt="Green IMac Back"
                    className='2xl:max-w-full xl:max-w-52 max-w-48' />
            </div>
            <div className='absolute md:top-1/2 top-3/4 md:left-4 left-12 
                        transform -translate-1/2 flex flex-col lg:space-y-2 space-y-1 bg-slate-50'>
                <div className='flex items-center space-x-2'>
                    <button className='2xl:w-8 2xl:h-8 md:w-5 md:h-5 w-4 h-4 rounded-full 
                            flex items-center justify-center bg-[#121212]' />
                    <span className='text-sm'>Green</span>
                </div>
            </div>
        </div>
    )
}

export default IMac;