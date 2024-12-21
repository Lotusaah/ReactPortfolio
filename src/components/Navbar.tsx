import "./Footer.css";
import { Link } from 'react-router-dom';
import Vlogo from './Vlogo.png';
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 w-full z-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={Vlogo} alt="Logo" className="h-12 text-center vlogo-bg"/>
          </Link>
          <div className="text-white text-lg font-bold ml-4 underline-offset">
            <Link to="/">Victor's Portfolio</Link>
          </div>
        </div>

        <ul className="space-x-4 hidden md:flex">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link to="/project" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1">
              Projects
            </Link>
            <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-200">
            <li>
                <Link to="/project/research" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 hover:rounded-b-md">Research</Link>
              </li>
              <li>
                <Link to="/project/tictactoe" className="block px-4 py-2 hover:rounded-t-md text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300">Tic-Tac-Toe</Link>
              </li>
              <li>
                <Link to="/project/3dmodel" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300">3D Models</Link>
              </li>
              <li>
                <Link to="/project/matlab" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300 hover:rounded-b-md">Matlab</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1">
              Contact
            </Link>
          </li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="nav-dashing md:hidden menu p-2 rounded-lg hover:bg-brand-400 transition-all">
          <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-16 right-0 w-full z-10 bg-gray-800 p-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white underline-offset transition duration-300 px-2 py-1" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
