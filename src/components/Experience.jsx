import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import angularImage from "../assets/angular.png";
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import php  from "../assets/php.png";
import mongodb from "../assets/mongodb.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
    const experiences = [
        {
            id: 1 ,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

        {
            id: 2 ,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        } ,
        {
            id: 3 ,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id : 4 ,
            src : typescript,
            title : "TypeScript",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-400'
        },
        {
            id: 6 ,
            src: angularImage,
            title: 'Angular',
            style: 'shadow-red-600'
        },
        {
            id: 8 ,
            src: node,
            title: 'Node',
            style: 'shadow-green-300'
        }
        ,
        {
            id: 9,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        }
        ,
        {
            id: 9,
            src: java,
            title: 'Java',
            style: 'shadow-blue-600'
        },
        {
            id: 10,
            src: mongodb,
            title: 'mongoDB',
            style: 'shadow-green-700 hidden sm:flex  flex-col'
        },
        {
            id : 11,
            src : php,
            title : 'PHP',
            style :'shadow-violet-500 hidden sm:flex  flex-col'
        },
        {
            id: 12,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-300'
        }
   
    ]
    
  return (
    <div name = "experience" className='w-full h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
        w-full h-full'>  
            <div >
                <p className='text-4xl font-bold border-b-4
                border-gray-800 p-2 inline'>Experience</p>
                <p className='py-6'>Les technologies avec lesquelles j'ai travaillé sont les suivantes :</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
               {
                experiences.map(({id,src,title,style}) =>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto' />
                   <p className='mt-4'>{title}</p>
                </div>
                ))
               }
               
            </div>
        </div>
    </div>
  )
}

export default Experience