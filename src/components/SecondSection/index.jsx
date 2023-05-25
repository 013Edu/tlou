import { FaCircle } from 'react-icons/fa';

import './styles.css'


function SecondSection() {

  return(
    <section className="h-screen flex justify-around items-center bg-black sm:flex-row min-[320px]:text-center pt-60 min-[320px]:flex-col">
        <div className='p-12 bg-black'>
           <div className='flex items-center gap-3 min-[320px]:justify-center'>
            <FaCircle color='#fff' />
            <h3 className='text-white font-medium text-2xl sm:text-2xl min-[320px]:text-sm'>Conheça os personagens</h3>
           </div>
           <h2 className='text-white font-extrabold sm:text-5xl my-6 min-[320px]:text-4xl'>Toda grande aventura é uma história esperando para ser contada</h2>
           <p className='text-white text-lg flex sm:justify-center sm:text-center sm:w-full py-6 mb-6 '>Resista e sobreviva.<br/> Reviva o aclamado jogo que deu início a tudo, totalmente reconstruído do zero para o console PlayStation®5.</p>
            <div className='flex gap-2 mb-96 min-[320px]:justify-center min-[320px]:p-6'>
                <img className=' sm:w-6/12 min-[320px]:w-full h-full' src="data:image/jpeg;base64,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" alt="Símbolo dos vagalumes" />
            </div>
        </div>
       <div>
       
       </div>
    </section>
  )
}

export default SecondSection;