import { Threedmodel } from './Threedmodel.tsx';
import './Project.css';

export const All3D = () => {
  return <div className='flex-col text-center items-center justify-center bg-brand-300'>
    <h1 className='font-bold transition-all duration-500 text-shadow-xl hover:text-shadow-lg p-4vh project-dashing project-new-font bg-clip-text text-transparent'>My Three Demensional Designs.</h1>
    <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 z-10 bg-brand-300">
         
        <div className='md:w-100 md:h-100 lg:w-90 lg:h-90'>
      <Threedmodel />
    </div>
          
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
   
   
  </div>
}