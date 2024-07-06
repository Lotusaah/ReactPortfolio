import Pic1 from '../../../public/images/Pic1.png';
import Pic2 from '../../../public/images/Pic2.png';
import Pic3 from '../../../public/images/Pic3.png';
import Record from '../../../public/images/Recording.mp4';
import './Project.css';
import PDFViewer from './PDFViewer.tsx';

export const Matlab = () => {
    

    return (
        <div className="bg-brand-300">
            <h1 className="tic-new-font text-center font-bold p-2vh tic-dashing bg-clip-text text-transparent">Matlab</h1>

            <div className="mt-4vh mb-4vh bg-brand-300 rounded-xl font-semibold project-gradient-border project-moody transition m-4vh p-2vh">
            Hi this is my game project from freshman year engineering class. It is a game inspired by the Paintball game from Pigeon made for ios messages. But I recreated it in Matlab using a game engine prvided by  Ohio State. 
            </div>
          
             
            <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col">
          <div className="flex-grow-1 flex justify-center items-center bg-brand-300 p-5vh"> 
            <div className=" matlab-new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg home-dashing bg-clip-text text-transparent">Start.</h1>
            </div>
          </div>
          <div className="home-gradient-border home-moody transition duration-300 flex-grow-1 bg-white p-5vh rounded-2xl md:rounded-r-none">
              <div className="sm:flex-grow-3 lg:flex-grow-1 flex justify-center">
               <img src={Pic1} className='h-40vh rounded project-moody transition-all'/>
              </div>
          </div>
        </div>
      </div>

      
      <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col-reverse ">
          <div className="home-gradient-border home-moody z-10 flex-grow-1 transition duration-300 bg-white p-5vh rounded-2xl md:rounded-l-none">
              <div className="sm:flex-grow-3 lg:flex-grow-1 flex justify-center">
              <img src={Pic3} className='h-40vh rounded project-moody transition-all'/>
              </div> 
          </div>
          <div className="flex-grow-1 bg-brand-300 p-5vh flex justify-center items-center"> 
            <div className="matlab-new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg project-dashing bg-clip-text text-transparent">Selection.</h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className=" bg-brand-300 pb-4vh">
        <div className="flex md:flex-row flex-col">
          <div className="flex-grow-1 bg-brand-300 p-5vh flex justify-center items-center"> 
            <div className="matlab-new-font font-bold text-center bg-brand-300">
              <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg pt-2vh project-dashing bg-clip-text text-transparent">Restart.</h1>
            </div>
          </div>
          <div className="home-gradient-border home-moody flex-grow-1 transition duration-300 bg-white p-5vh rounded-2xl md:rounded-r-none">
            <div className="sm:flex-grow-3 lg:flex-grow-1 flex justify-center">
              <img src={Pic2} className='h-40vh rounded project-moody transition-all'/>
            </div> 
          </div>
        </div>
      </div>

      <h1 className="tic-new-font text-center font-bold p-2vh tic-dashing bg-clip-text text-transparent">Video</h1>

      <div className="flex bg-brand-300 pt-4vh pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 z-10 bg-brand-300">
         
            <div className="flex h-50vh justify-center bg-brand-300 rounded-xl home-gradient-border home-moody transition">
              
              <video className="w-full max-w-screen-lg rounded" controls>
                <source src={Record} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
             
            </div>
          
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>


            <div className="flex bg-brand-300 pb-4vh pt-4vh">
                <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
                <div className="flex-grow-2 z-10 bg-brand-300">
                    <div className="bg-white project-moody transition-all">
                      <div>
                        <PDFViewer />
                      </div>
                    </div>
                </div>
                <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
            </div>
        </div>
    );
};


/*
Hi this is my game project from freshman year engineering class. It is a game inspired by the Paintball game from Pigeon made for ios messages. But I recreated it in Matlab using a game engine prvided by  Ohio State. 
*/