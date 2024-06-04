import React from "react";
import "./Home.css";
import headshot from '../components/headshot.jpg';

export const Home = () => {
  return (
    <div style={{ height: 'calc(100vh - 164px)' }}>
      <div className="h-30vh new-font font-bold text-center bg-brand-300">
        <h1 className="p-4vh pb-1vh">Hi. I am.</h1>
        <h1 className="p-4vh pt-0">Victor.</h1>
      </div>

      <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-300">
          <div className="bg-white rounded-lg p-10vh">
            <div className="bg-brand-300 rounded lg">
              <div className="flex">
                <div className="flex-3">
                  <img src={headshot} />
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
    </div>
  );
};
