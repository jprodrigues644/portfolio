import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from'react-icons/hi'
import{BsFillPersonFill} from'react-icons/bs'
const SocialLinks = () => {

  const socialLinks = [
  
    {
      id : 1,
      src : <> Github <> </> <FaGithub size={30}/> </> ,
      link: "https://github.com/jprodrigues644",
      style : "rounded-tr-md"
    },
    {
      id : 2,
      src : <>Linkedin <> </> <FaLinkedin size={30}/> </> ,
      link : "https://www.linkedin.com/in/joao-paulo-sebastiao-rodrigues-111804167",
      style: ""
    },
    {
      id : 3,
      src : <> EMail <> </> <HiOutlineMail size={30}/> </> ,
      link : "mailto:jprodrigues644@gmail.com",
      style: ""
    },
    {
      id : 4,
      src : <>CV <> </> <BsFillPersonFill size={30}/> </> ,
      link : "/Cv.pdf",
      style: "rounded-br-md"
    }
  ]
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
         <ul>
            {
              socialLinks.map(({id, src, link, style}) =>(
                <li key={id} className={`flex  items-center W-40 h-14 px-4
                ml-[-63px] hover:ml-[-10px]  duration-300 
                bg-gray-200 ${style}`}>
    
                <a href= {link} target="_blank" rel="noreferrer"
                  className="flex justify-between items-center w-full "
                  >
                 {src} 
                  </a>
                </li>

              ) )
            }
          
         </ul>
    </div>
  )
}

export default SocialLinks