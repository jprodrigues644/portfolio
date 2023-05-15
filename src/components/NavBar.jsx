import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
const NavBar = () => {

    const [show, setShow] =useState(false)
    const links = [
      {
        id : 1 ,
        link:"accueil"
      },
      {
        id : 2 ,
        link:"portfolio"
      },
      {
        id : 3 ,
        link:"experience"
      },
      {
        id : 4 ,
        link:"contact"
      }
 
    ]
  return (
    <div className='flex justify-between items-center w-full text-white fixed bg-black h-20 px-4 py-6'  >
      <h1 className="text-5xl font-signature">Joao Paulo </h1>
      <ul className= "invisible md:visible md:flex">
      
   
    {links.map( ({id,link})=>
         <li key={id} className='px-4 cursor-pointer capitalize hover:scale-110 duration-150'>
          <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>)}
    </ul>

    <div onClick={()=>setShow(!show)} className="cursor-pointer pr-4 z-10 md:hidden ">
     { show?  <FaTimes size={30} /> : <FaBars size={30} /> }
      
    </div>
    {show && (
    <ul className= "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-500  ">
        {links.map( ({id,link})=>
         <li key={id} className='px-4 cursor-pointer text-4xl capitalize py-6 hover:scale-110 duration-150'>
          <Link onClick={()=>setShow(!show)} to={link} smooth duration={600}>
              {link}
            </Link>
          </li>)}
   
    </ul>
     )}
    
    </div>
  ) ;
};

export default NavBar