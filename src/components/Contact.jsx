import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen p-4'>
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div>
           <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Contactez-moi</p>
           <p className='py-6'>Veuillez écrire votre message ci-dessous afin d'entrer en contact avec moi.</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/918f30f2-818a-41f5-aee3-118c3b310b49' method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder=' Veillez rentrer votre nom ' className='p-2 bg-transparent rounded-md border-2 focus:outline-none'/>
                <input type='text' name='email' placeholder=' Veillez rentrer votre adresse  email ' className='p-2 my-4 bg-transparent rounded-md  border-2 focus:outline-none'/>
                <textarea name='message' rows="10" placeholder='Rentrez votre message'
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
                <button className=' text-white mx-auto px-6 py-3 my-8 flex items-center rounded-md 
                bg-gradient-to-r from-slate-600 to-black hover:scale-110 duration-300'>Envoyer</button>
            </form>

        </div>
       </div>
    </div>
  )
}

export default Contact