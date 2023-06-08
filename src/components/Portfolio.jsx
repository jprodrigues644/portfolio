import React from 'react'
import snake from "../assets/portfolio/snake.png"
import aviontracker from "../assets/portfolio/aviontracker.png"
import montyhall from "../assets/portfolio/montyhall.png"
const Portfolio = () => {

  const portfolios = [
          {id : 1 , 
          src: snake,
         linkDemo : "https://snackjavascript.netlify.app/",
        linkCode : "https://github.com/jprodrigues644/snakeJavascript" },
        {id : 2 , 
          src: aviontracker,
         linkDemo : "https://github.com/jprodrigues644/",
        linkCode : "https://github.com/jprodrigues644/avionstrackers" },
        {id : 3 , 
          src: montyhall,
         linkDemo : "https://montyhallproblemsimulator.netlify.app/",
        linkCode : "https://github.com/jprodrigues644/montyhall" },

  ]
  return (
    <div name = "portfolio" className='w-full h-screen'>
     
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
        w-full h-full' >
      <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
          <p className='py-6'>Vous trouverez ci-dessous certains de mes projets. </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4  gap-8 px-12 sm:px-0 '>

        {
          portfolios.map(({id, src, linkDemo, linkCode}) => (

           
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg "> 
              <img src = {src} alt='project snake' className=' h-3/4 rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center  '> 
              <a href={linkDemo} target='blanc'><button className=" w-1/2 md:px-6 md:py-3 duration-200 md:m-3 px-1 hover:scale-105" > Demo </button></a>
              <a href={linkCode} target='blanc'><button className=" w-1/2 md:px-6 md:py-3 duration-200 md:m-3 px-1 hover:scale-105"> Code</button></a>
            </div>
          </div>
        

          ) )
        }
      </div>  
      </div>
    </div>
  )
}

export default Portfolio