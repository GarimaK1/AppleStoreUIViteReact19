import React from 'react';
import { macbookModels } from '../data/index';

const Macbook = () => {
    const [selectedChip, setSelectedChip] = React.useState(0);
    const [selectedColor, setSelectedColor] = React.useState(0);

    const currentChipType = macbookModels[selectedChip];
    const currentColor = currentChipType.colors[selectedColor];

    const handleChipSelection = (index) => {
        setSelectedChip(index);
    }

    return (
        <div className='flex flex-col items-center justify-around bg-white p-8 h-full'>
            <h1 className='2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-slate-700 mb-8'>
                Choose your new macBook Air.
            </h1>
            <div className='flex'>
                {
                    macbookModels.map((macbook, index) => (
                        <button key={macbook.chip} onClick={() => handleChipSelection(index)}
                            className={`border ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} ${selectedChip === index ? 'border-2 border-violet-500' : 'border-slate-700'} 
                                            cursor-pointer 2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 flex flex-col justify-evenly items-center`}>
                            <span className='2xl:text-lg xl:text-sm text-xs font-bold text-slate-700'>
                                With {macbook.chip} chip
                            </span>
                            <span className='2xl:text-base xl:text-sm text-xs text-slate-500'>
                                {macbook.price}
                            </span>
                        </button>
                    ))
                }
            </div>
            <div className="">
                <div className="w-80 2xl:mb-0 mb-8 flex flex-col 2xl:p-4 md:items-start items-center">
                    <img src={`${currentColor.img}`} alt={`Macbook Air with chip ${currentChipType.chip}`}
                        className="2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:mt-6 object-contain m-auto"
                    />
                    <span className="2xl:text-lg xl:text-sm font-medium text-slate-700 mb-2 text-center md:text-left">
                        {currentColor.label}
                    </span>
                    <div className='flex space-x-2 mb-4 md:text-left justify-center md:justify-start'>
                        {
                            currentChipType?.colors.map((colorData, index) => (
                                <button key={colorData.label} style={{ backgroundColor: colorData.bg }} 
                                        className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full cursor-pointer
                                        ${ selectedColor === index ? 'border-violet-500' : 'border-transparent' } border-2 hover:border-violet-500 `}>
                                </button>
                            ))
                        }
                    </div>
                    <img src='images/apple-m2-icon.png' alt='Apple M2 Icon' className="w-12 h-12 2xl:mb-4 xl:mb-2 m-1" />
                    <div className='2xl:mb-4 xl:mb-2 text-center md:text-left'>
                        <p className='2xl:text-lg xl:text-base font-semibold text-slate-700 mb-0.5'>
                            8-core CPU
                        </p>
                        <p className='2xl:text-lg xl:text-base font-semibold text-slate-700 mb-0.5'>
                            8-core CPU
                        </p>
                        <p className='2xl:text-lg xl:text-base font-semibold text-slate-700 mb-0.5'>
                            8-core CPU
                        </p>
                        <p className='2xl:text-lg xl:text-base font-semibold text-slate-700 mb-0.5'>
                            8-core CPU
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

export default Macbook;