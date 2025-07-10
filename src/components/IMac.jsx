import React from 'react';
import { imacModels } from '../data/index';

const IMac = () => {
    const [selectedColor, setSelectedColor] = React.useState('green');
    const [visibleLabel, setVisibleLabel] = React.useState('Green');

    const getSelectedColorModel = () => {
        return imacModels.find((model) => model.label.toLowerCase() === selectedColor);
    }

    return (
        <div className='h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative'>
            <div className='h-full col-span-1 row-span-2 flex flex-col items-center 
                    justify-start md:justify-center pt-8 ml-1 bg-slate-50'>
                <img src={getSelectedColorModel().images.side} alt="Green IMac Side View"
                    className='2xl:max-w-full xl:max-w-36 max-w-24' />
            </div>
            <div className='bg-slate-50 row-span-1 col-span-1 flex items-center justify-center p-4'>
                <img src={getSelectedColorModel().images.front} alt="Green IMac Front View"
                    className='2xl:max-w-full xl:max-w-52 max-w-48' />
            </div>
            <div className='bg-slate-50 row-span-1 col-span-1 flex items-center justify-center p-4'>
                <img src={getSelectedColorModel().images.back} alt="Green IMac Back View"
                    className='2xl:max-w-full xl:max-w-52 max-w-48' />
            </div>
            <div className='absolute md:top-1/2 top-3/4 md:left-4 left-12 
                        transform -translate-y-1/2 flex flex-col lg:space-y-2 space-y-1 bg-slate-50'>
                {
                    imacModels.map((model, index) => (
                        <div key={model.label} className='flex items-center space-x-2'>
                            <button style={{ backgroundColor: model.bg }} 
                                    className={`2xl:w-8 2xl:h-8 md:w-5 md:h-5 w-4 h-4 rounded-full 
                                        flex items-center justify-center  cursor-pointer border-2 hover:border-violet-500
                                        ${selectedColor === model.label.toLowerCase() ? 'border-violet-500' : 'border-transparent'}`}

                                    onClick={() => {
                                        setSelectedColor(model.label.toLowerCase());
                                        setVisibleLabel(model.label);
                                    }}
                            />
                            {
                                // Show the label only if that color is selected
                                visibleLabel === model.label && <span className='text-sm'>{model.label}</span>
                            }
                        </div>
                    ))
                }
                <button type='button' className='text-sm mt-4 px-2 py-1 bg-violet-500 text-white rounded-full cursor-pointer'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default IMac;