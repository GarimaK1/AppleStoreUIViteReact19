import React from 'react';
import { macbookModels } from '../data/index';

const Macbook = () => {
    return (
        <div className='flex flex-col items-center justify-around bg-white p-8 h-full'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-800 mb-8'>
                Choose your new macBook.
            </h1>
            <div className='flex'>
                <button className='2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 flex flex-col justify-evenly items-center border rounded-l-xl'>
                    <span className='2xl:text-lg xl:text-sm text-xs font-bold text-slate-800'>
                        With M2 chip
                    </span>
                    <span className='2xl:text-base xl:text-sm text-xs text-slate-600'>
                        From $999
                    </span>
                </button>
                <button className='2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 flex flex-col justify-evenly items-center border rounded-r-xl'>
                    <span className='2xl:text-lg xl:text-sm text-xs font-bold text-slate-800'>
                        With M3 chip
                    </span>
                    <span className='2xl:text-base xl:text-sm text-xs text-slate-600'>
                        From $1,299
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Macbook;