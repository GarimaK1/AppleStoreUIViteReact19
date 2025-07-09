import React from 'react';
import { navItems } from '../data/index';

const Navbar = ({ activePage, handleNavClick }) => {
  return (
    <div className='2xl:w-80 xl:w-52 w-44 h-full bg-slate-50 flex flex-col justify-between py-5 px-3 md:pb-0'>
      <a href='#' className='2xl:text-2xl xl:text-xl text-indigo-700 font-medium mb-14'>
        Mock Apple Store
      </a>
      <div className='flex flex-col flex-grow'>
        {
          navItems.map((item, index) => (
            <a key={item.label} href='#' className='xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer'
              onClick={() => handleNavClick(index)}>
              <i className={`${item.icon} text-xl text-violet-500`}></i>
              <span className='text-sm text-slate-500 mx-2.5 mr-auto tracking-wider'>{item.label}</span>
              <i className={`${activePage === index ? item.activeIcon : item.inactiveIcon} text-lg text-yellow-400`}></i>
            </a>
          ))
        }
      </div>
      <div className='flex justify-between pb-5'>
        <a href='#'>
          <i className='bx bxl-instagram-alt text-2xl text-indigo-700'></i>
        </a>
        <a href='#'>
          <i className='bx bxl-facebook text-2xl text-indigo-700'></i>
        </a>
        <a href='#'>
          <i className='bx bxl-twitter text-2xl text-indigo-700'></i>
        </a>
        <a href='#'>
          <i className='bx bxl-youtube text-2xl text-indigo-700'></i>
        </a>
      </div>
    </div>
  )
}

export default Navbar;