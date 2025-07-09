import React from 'react'

const Controls = ({ toggleZoom, isFrameZoom, resetHome, activePage }) => {
  return (
    <div className='absolute top-3 right-3 space-x-2 z-10'>
        <button className='text-2xl text-violet-500 cursor-pointer hidden lg:inline-block' onClick={toggleZoom}>
            <i className={isFrameZoom ? 'bx bxs-zoom-out' : 'bx bxs-zoom-in'}></i>
        </button>
        <button 
          className={`text-2xl ${activePage === 0 ? 'text-violet-300 cursor-not-allowed': 'text-violet-500 cursor-pointer'}`} 
              onClick={resetHome}>
            <i className='bx bx-x-circle'></i>
        </button>    
    </div>
  )
}

export default Controls