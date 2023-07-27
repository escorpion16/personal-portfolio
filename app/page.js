import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Dennis Ponce</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Dennis Ponce</h2>
            <h3 className='text-2xl py-2'>Developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking! </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>
    </div>
    
  )
}
