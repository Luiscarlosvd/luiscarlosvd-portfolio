import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsMailbox2 } from 'react-icons/bs'
import lvicon from '../assets/Luis-Valera.png';

const Navbar = () => {
    return (
      <header className='relative flex flex-col p-2 items-center md:flex-row md:px-40 md:py-4'>
        <div className='md:flex-1 md:justify-start'>
          <img src={lvicon} alt="Luis Valera Icon" className='w-60 py-2 md:w-48'></img>
        </div>
        <nav className="text-lg flex flex-col items-center py-2 gap-4 text-midnight-green md:flex-row md:self-center md:shrink-0">
            <NavLink className="font-semibold">Home</NavLink>|
            <NavLink className="font-semibold">Projects</NavLink>|
            <NavLink className="font-semibold ">About me</NavLink>|
            <NavLink className="font-semibold">Contact</NavLink>
        </nav>
        <div className='flex md:flex-1 md:justify-end'>
          <BsMailbox2 className='hidden cursor-pointer text-4xl md:block text-dark-spring-green' />
        </div>
      </header>
    );
}

export default Navbar;