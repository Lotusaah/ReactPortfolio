import "./Home.css";
import vlogo from '../components/Vlogo.png';
import headshot from '/images/Headshot.jpg';

export const Home = () => {
  console.log('Image Path:', headshot);

  return (
    <div>
      <div className="h-30vh new-font font-bold text-center bg-brand-300">
        <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg p-4vh pb-1vh">Hi. I am.</h1>
        <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg p-4vh pt-0">Victor.</h1>
      </div>

      <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-300">
          <div className="hover transition duration-300 bg-white rounded-lg p-10vh">
            <div className="h-25vh bg-brand-300 rounded lg">
              <img className="w-10vh h-10vh" src={headshot} alt="Headshot" />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
      
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
                  <img src={headshot} className='' width='50px' alt="Headshot" />
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
      <img src={headshot} className='' width='50px' alt="Headshot" />
    </div>
  );
};
