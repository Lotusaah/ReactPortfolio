import { useState } from "react";
import './Tictactoe.css';

export const Tictactoe = () => {
  const [player, setPlayer] = useState(null);
  
  return <div style={{ height: 'calc(100vh - 172px)' }} className="bg-brand-300">
    <h1 className="new-font text-center font-bold p-2vh">Welcome To</h1>
    <h1 className="new-font text-center font-bold p-2vh pt-0">Tic-Tac-Toe</h1>
    <div className="flex bg-brand-400 pb-4vh">
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
          <div className="flex-grow-2 bg-brand-400 h-25vh">
            <div className="bg-brand-500">
              <div className="m-3vh">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
      </div>
  </div>
};