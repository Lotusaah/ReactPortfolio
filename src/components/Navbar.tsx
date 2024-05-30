import "./Footer.css";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Vlogo from './Vlogo.png';


export const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4 width-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex"> 
          <div className="flex-1 flex items-center">
            <Link to="/">
              <img src={Vlogo} alt="Logo" className="h-12 text-center vlogo-bg"/>
            </Link>
          </div> 
          <div className="text-white text-lg font-bold flex-1 underline-offset">
            <Link to="/">Victor's Portfolio</Link>
          </div>
        </div>
        <ul className="space-x-4 hidden md:flex">
         
          <li>
            <Link to="/" className="text-gray-300 hover:text-white underline-offset">
              About
            </Link>
          </li>
          <li>
            <Link to="/tictactoe" className="text-gray-300 hover:text-white underline-offset">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white underline-offset">
              Contact
            </Link>
          </li>
        </ul>
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </button>
      </div>
     
    </nav>
  );
};

