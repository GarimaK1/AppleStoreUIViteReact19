import React from 'react';
import { macbookModels } from '../data/index';

const Macbook = () => {
    const [selectedChip, setSelectedChip] = React.useState(0);

    const handleChipSelection = (index) => {
        setSelectedChip(index);
    }
    
    return (
        <div className='flex flex-col items-center justify-around bg-white p-8 h-full'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-800 mb-8'>
                Choose your new macBook.
            </h1>
            <div className='flex'>
                {
                    macbookModels.map((macbook, index) => (
                        <button key={macbook.chip} onClick={() => handleChipSelection(index)} 
                                className={`border ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} ${selectedChip === index ? 'border-2 border-violet-500' : 'border-slate-800'} 
                                            cursor-pointer 2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 flex flex-col justify-evenly items-center`}>
                            <span className='2xl:text-lg xl:text-sm text-xs font-bold text-slate-800'>
                                With {macbook.chip} chip
                            </span>
                            <span className='2xl:text-base xl:text-sm text-xs text-slate-600'>
                                {macbook.price}
                            </span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Macbook;