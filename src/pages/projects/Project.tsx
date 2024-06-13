import { BrowserRouter as Router, Routes, Route, Link, Outlet, useMatch } from 'react-router-dom';
import { Error } from '../../components/404.tsx';

import { Tictactoe } from './Tictactoe';
import { Threedmodel } from './Threedmodel.tsx';
import { Matlab } from './Matlab.tsx';

export const Project = () => {
  
  return (
    <div>
      <nav className='flex h-5vh bg-brand-300'>
        <Link className='flex-grow bg-brand-200 m-1vh rounded text-center font-bold hover:bg-brand-100 hover:shadow-lg transition duration-300' to='/project/tictactoe'>Tic-Tac-Toe</Link>
        <Link className='flex-grow bg-brand-200 m-1vh rounded text-center font-bold hover:bg-brand-100 hover:shadow-lg transition duration-300' to='/project/3dmodel'>3D Models</Link>
        <Link className='flex-grow bg-brand-200 m-1vh rounded text-center font-bold hover:bg-brand-100 hover:shadow-lg transition duration-300' to='/project/matlab'>Matlab</Link>
      </nav>

      <Routes>
        <Route path='/' element={<ProjectHome />} />
        <Route path='tictactoe' element={<Tictactoe />} />
        <Route path='3dmodel' element={<Threedmodel />} />
        <Route path='matlab' element={<Matlab />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

const ProjectHome = () => {
  return <div>
    <h1>I am constantly working on something.</h1>
    <p>I completed a website for my leadership in a diverse and just society class.</p>
    <p>I am new to web development so the quality of my work is always imporving.</p>
  </div>
}