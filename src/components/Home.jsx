import React from 'react'
import Image from  "../assets/Image.PNG"
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="accueil" className="h-screen w-full flex  ">
    <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
     
      <div className=" flex flex-col justify-center ">
        <h2 className="text-3xl sm:text-6xl font-bol">
         Etudiant ingénieur en informatique
        </h2>
        <p className='text-gray-800 py-4 max-w-md'>
        Je suis un étudiant en deuxième année de cycle ingénieur en 
        informatique, possédant une maîtrise étendue dans diverses technologies informatiques.
         Mes compétences englobent la conception et le développement de logiciels, ainsi que le développement d'applications Web
 Grâce à mon parcours académique et à mes projets personnels, j'ai pu développer une expertise dans le domaine de l'informatique, en me
         familiarisant avec les dernières tendances et les meilleures pratiques
        </p>
        <div>
          <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-600 to-black'>
            Projets  
            <span className='group-hover:rotate-90 duration-300'>
              <MdKeyboardArrowRight size={25}/>
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img src={Image} alt="mon profil" className=" hidden md:flex rounded-2xl mx-auto w-2/3 md:w-full " />
      </div>
    </div>
  </div>
  )
} 

export default Home