import React from 'react';
import { watchModels } from '../data/index';

const Watch = () => {
    return (
        <div className='flex flex-col items-center justify-start bg-white h-full py-8 px-4 overflow-auto'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-700 my-8 cursor-default'>
                Choose your new Apple watch.
            </h1>
            <div className='w-full flex justify-around flex-wrap md:flex-nowrap'>
                {
                    watchModels.map((watch) => (
                        <div key={watch.name} className='w-60 h-[450px] flex flex-col justify-around items-center md:items-start'>
                            <div className='w-2/3 h-2/3 md:w-full md:h-64 md:mb-4 overflow-hidden relative group'>
                                {
                                    watch.imgs.map((img, ind) => (
                                        <img key={img} src={img} alt={watch.name}
                                            className={`absolute w-full h-full object-contain 
                                                ${ind === 0 ? 'opacity-100 group-hover:opacity-0' : 'opacity-0 group-hover:opacity-100'} 
                                                transition duration-300`} />
                                    ))
                                }
                                {/* <img src="images/watch10-side.png" alt="watch"
                                    className='absolute w-full h-full object-contain 
                                opacity-100 group-hover:opacity-0 transition duration-300' />

                                <img src="images/watch10.png" alt="watch icon"
                                    className='absolute w-full h-full object-contain
                                opacity-0 group-hover:opacity-100 transition duration-300' /> */}
                            </div>
                            <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold cursor-default'>
                                {watch.name}
                            </h3>
                            <a href="#" className='my-2 text-base text-violet-500 cursor-default'>
                                {watch.price}
                            </a>
                            <div className='md:text-sm text-xs text-slate-700 my-2 cursor-default'>
                                {
                                    watch.desc.map((spec) => (
                                        <p key={spec} className=''>
                                            {spec}
                                        </p>
                                    ))
                                }
                            </div>
                            <button type='button' className='text-sm my-4 px-2 py-1 md:px-4 md:py-2 bg-violet-500 text-white rounded-full w-fit cursor-pointer'>
                                Buy Now
                            </button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Watch;