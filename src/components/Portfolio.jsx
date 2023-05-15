import React from 'react'
import snake from "../assets/portfolio/snake.png"

const Portfolio = () => {

  const portfolios = [
          {id : 1 , 
          src: snake,
         link : "https://github.com/jprodrigues644/snakeJavascript" }
  ]
  return (
    <div name = "portfolio" className='w-full md:h-screen'>
     
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
        w-full h-full' >
      <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
          <p className='py-6'>Vous trouverez ci-dessous certains de mes projets. </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
          portfolios.map(({id, src, link}) => (

           
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg"> 
              <img src = {src} alt='project snake' className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center '> 
                <button className=" w-1/2 px-6 py-3 duration-200 m-3 hover:scale-105" > Demo </button>
                <a href={link} target='blanc'><button className=" w-1/2 px-6 py-3 duration-200 m-3 hover:scale-105"> Code</button></a>
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