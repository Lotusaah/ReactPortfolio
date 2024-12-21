import { BrowserRouter as Router, Routes, Route, Link, Outlet, useMatch } from 'react-router-dom';
import { Error } from '../../components/404.tsx';
import './Project.css';

import { Tictactoe } from './Tictactoe';
import { All3D } from './All3D.tsx';
import { Matlab } from './Matlab.tsx';
import { Research } from './Research.tsx';

export const Project = () => {
  
  return (
    <div>
      <nav className='flex h-5vh bg-brand-300'>
        <Link className='project-dashing project-moody flex-grow bg-brand-200 m-1vh rounded text-center font-bold transition duration-3000' to='/project/research'>Research</Link>
        <Link className='project-dashing project-moody flex-grow bg-brand-200 m-1vh rounded text-center font-bold transition duration-300' to='/project/tictactoe'>Tic-Tac-Toe</Link>
        <Link className='project-dashing project-moody flex-grow bg-brand-200 m-1vh rounded text-center font-bold transition duration-300' to='/project/3dmodel'>3D Models</Link>
        <Link className='project-dashing project-moody flex-grow bg-brand-200 m-1vh rounded text-center font-bold transition duration-3000' to='/project/matlab'>Matlab</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ProjectHome />} />
        <Route path='research' element={<Research />} />
        <Route path='tictactoe' element={<Tictactoe />} />
        <Route path='3dmodel' element={<All3D />} />
        <Route path='matlab' element={<Matlab />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

const ProjectHome = () => {
  return <div style={{ height: 'clac(100vh-184px)' }} className='h-screen flex flex-col items-center bg-brand-300'>
     <svg className="w-32 h-32 text-brand-500 m-5vh" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a1 1 0 01-1-1V4.414l-4.293 4.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 4.414V17a1 1 0 01-1 1z" clip-rule="evenodd"></path>
  </svg>
  <h1 className="transition-all project-new-font font-bold duration-500 text-shadow-xl hover:text-shadow-lg p-4vh pt-2vh project-dashing bg-clip-text text-transparent">Click above.</h1>
  <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 z-10 bg-brand-300">
         <ul className='font-semibold list-disc project-gradient-border project-moody transition-all hover:animate-none rounded-xl p-4vh'>
           <li className=''>I am constantly working on something.</li>
           <li className=''>I completed a website for my leadership in a diverse and just society class. <a className='text-blue-700' target='_blank' href='https://www.vic-manual.com'>Link.</a> (it may be down) 
           </li>
           <li className=''>I am new to web development so the quality of my work is always imporving.</li>
         </ul>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
  
  
  </div>
}