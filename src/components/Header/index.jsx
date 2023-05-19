import { FaPlaystation, FaCircle } from 'react-icons/fa';
import image from '../../assets/tlou2.webp'
import image2 from '../../assets/faixa-etaria.png'
import gif from '../../assets/gif.webp'
import iconEffect from '../../assets/icon-effect.png'
import iconVibration from '../../assets/icon-function-vibration.png'
import iconGameOffline from '../../assets/icon-game-offline.png'
import iconPlus from '../../assets/icon-psn-plus.png'
import iconSinglePlayer from '../../assets/icon-singleplayer.png'
import iconRemote from '../../assets/icon-use-remote.png'
import './style.css'

function Header() {
  return (
    <div>
      <section className='flex justify-between items-center p-6 bg-black'>
        <div className=' lg:flex md:flex min-[300px]:hidden min-[300px]:hidden'>
        <FaPlaystation className='text-3xl text-gray-50' />
        </div>
        <img className='h-20 min-[320px]:h-10 ' src={image} alt="logo de the last of us" />
        <div className='flex items-center gap-3'>
          <div>
            <h3 className='text-gray-50 font-bold min-[300px]:hidden'>Disponível para</h3>
          </div>
          <div>
            <button className='text-gray-50 border border-white p-1'>PS4</button>
            <button className='text-gray-50 ml-3 border border-white p-1'>PS5</button>
          </div>
        </div>
      </section>
      <div> 
        <main>
          <section class='h-screen module parallax parallax-1 min-[320px]:text-center '>
            <div className='flex justify-around items-center p-36 flex-col md:flex-row sm:text-center sm:gap-6 sm:text-sm scrol min-[320px]:p-0 min-[320px]:gap-6'>
              <div className=''>
                <div className='flex items-center gap-3 text-gray-100'>
                <h2 className='text-gray-100 text-xl font-bold'></h2>
                 <FaCircle /> Data de lançamento do jogo, dia 14/06/2013
                </div>
                <h1 className='text-gray-100 text-9xl font-bold mb-3 lg:text-9xl md:text-6xl'>The Last <br /> of Us</h1>
                <p className='text-gray-100 text-lg font-bold mb-8'>Dupla de sobreviventes que trilham um caminho para tentar <br /> a primeira vitória da humanidade.</p>
                <button className='text-black text-xl font-bold border border-none bg-white p-3 mr-3 cursor-pointer'>R$ 349,90</button>
                <button className='text-gray-100 text-xl font-bold border border-none bg-black p-3 cursor-pointer'>Comprar</button>
              </div>
              <div>
                <h2 className='text-white text-2xl font-bold mb-5'>Assista ao trailler</h2>
                <div className='border border-8 border-black mb-12 sm:w-4/5 sm:m-auto min-[320px]:w-4/5 min-[320px]:m-auto min-[320px]:my-6'>
                  <img className='  sm:w-full' src={gif} alt="gif da ellie e do joel andando" />
                </div>
                <div className='flex items-center lg:justify-center sm:mt-6 sm:justify-center'>
                  <div className='mr-5 sm:w-9 min-[320px]:ml-6'> <img src={image2} alt="faixa etária" /></div>
                  <div> <h2 className='text-gray-100 text-lg font-bold sm:text-sm'>Drogas Lícitas, Linguagem Imprópria, <br /> Violência Extrema</h2></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <section className='flex justify-between items-center p-8 bg-black text-gray-100 flex-wrap sm:text-center sm:justify-between min-[320px]:justify-center min-[320px]:gap-6'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <img src={iconGameOffline} />
          <h2>Jogo offline habilitado</h2>
        </div>
        <div className='flex flex-col items-center gap-3 sm:flex  min-[320px]:hidden'>
          <img src={iconSinglePlayer} />
          <h2>1jogador</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <img src={iconRemote} />
          <h2>Compatível com uso remoto</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <img src={iconVibration} />
          <h2>Função de vibração necessária</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <img src={iconEffect} />
          <h2>Efeito gatilho necessário</h2>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
          <img src={iconPlus} />
          <h2>Compatível com a ajuda do jogo</h2>
        </div>
      </section>
    </div>
  )
}

export default Header;