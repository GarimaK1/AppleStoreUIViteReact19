import React from 'react';
import { watchModels } from '../data/index';

const Watch = () => {
    return (
        <div className='flex flex-col items-center justify-around bg-white h-full py-8 px-4'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-700 mb-8'>
                Choose your new Apple watch.
            </h1>
            <div className='w-full flex justify-around'>
                <div className='w-60 h-[450px] flex flex-col justify-around'>
                    <div className='w-full h-64 mb-4 overflow-hidden relative group'>
                        <img src="images/watch10-side.png" alt="watch"
                            className='absolute w-full h-full object-contain 
                                opacity-100 group-hover:opacity-0 transition duration-300' />

                        <img src="images/watch10.png" alt="watch icon"
                            className='absolute w-full h-full object-contain
                                opacity-0 group-hover:opacity-100 transition duration-300' />
                    </div>
                    <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold'>
                        Apple Watch Series 10
                    </h3>
                    <a href="#" className='my-2 text-base text-violet-500'>
                        From $399
                    </a>
                    <div className='md:text-sm text-xs text-slate-700 my-2'>
                        <p className=''>
                            Spec 1
                        </p>
                        <p className=''>
                            Spec 2
                        </p>
                        <p className=''>
                            Spec 3
                        </p>
                        <p className=''>
                            Spec 4
                        </p>
                    </div>
                    <button type='button' className='text-sm my-4 px-4 py-2 bg-violet-500 text-white rounded-full w-fit'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Watch;