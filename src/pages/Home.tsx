import "./Home.css";
import headshot from '../components/jpeg-format.jpg';

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
          <div className="hover transition duration-300 bg-white rounded-2xl p-1vh">
            <div className="flex h-25vh bg-brand-300 rounded-xl">
              <div className="flex items-center justify-center flex-grow-1"><img className="hover transition duration-300 rounded-full w-20vh h-20vh " src={headshot} alt="Headshot" /></div>
              <div className="sm:flex-grow-3 lg:flex-grow-1">
                <h1 className='m-1vh font-bold'>About Me:</h1>
                <ul className="m-1vh pl-2vh font-semibold list-disc">
                  <li className="m-1vh">I am a incoming Sophmore at the Ohio State University.</li>
                  <li className="m-1vh">I am studing Mechanical Engineering.</li>
                  <li className="m-1vh">I love tinkering with objects and electronics.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
  
      <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col">
          <div className="flex-grow-1 bg-brand-300 p-5vh"> 
            <div className=" new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg pt-2vh">Projects.</h1>
            </div>
          </div>
          <div className="hover transition duration-300 flex-grow-1 bg-white p-5vh rounded-2xl md:rounded-r-none">
              <div className="sm:flex-grow-3 lg:flex-grow-1">
                <h1 className='m-1vh font-bold'>I have multiple projects including:</h1>
                <ul className="m-1vh pl-2vh font-semibold list-disc">
                  <li className="m-1vh">This website using vite, reactjs, threejs, tailwind and aws.</li>
                  <li className="m-1vh">Tic-Tac-Toe game in js.</li>
                  <li className="m-1vh">3D Models from class projects using CAD Software.</li>
                  <li className="m-1vh">Matlab game.</li>
                </ul>
              </div>
          </div>
        </div>
      </div>

      
      <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col-reverse ">
          <div className="flex-grow-1 hover transition duration-300 bg-white p-5vh rounded-2xl md:rounded-l-none">
              <div className="sm:flex-grow-3 lg:flex-grow-1">
                <ul className="m-1vh pl-2vh font-semibold list-disc">
                  <li className="m-2vh">I worked at Lowes Retail Store as a Merchandising Assosiate in the summar.</li>
                  <li className="m-2vh">I work freelance for sports and real estate videogarphy and photoagraphy.</li>
                </ul>
              </div> 
          </div>
          <div className="flex-grow-1 bg-brand-300 p-5vh"> 
            <div className=" new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg pt-2vh">Experince.</h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col">
          <div className="flex-grow-1 bg-brand-300 p-5vh"> 
            <div className=" new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg pt-2vh">Accolades.</h1>
            </div>
          </div>
          <div className="flex-grow-1 hover transition duration-300 bg-white p-5vh rounded-2xl md:rounded-r-none">
              <div className="sm:flex-grow-3 lg:flex-grow-1">
                <ul className="m-1vh pl-2vh font-semibold list-disc">
                  <li className="m-1vh">Louis Stokes Alliance Minority Program 3.0 GPA Fall 2023.</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
