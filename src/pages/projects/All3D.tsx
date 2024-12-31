import { ClampBase } from './ClampBase.tsx';
import { Assembly } from './Assembly.tsx';
import { CHook } from './CHook.tsx';
import { ClampTop } from './ClampTop.tsx';
import { HookAttach } from './HookAttach.tsx';
import { Suction } from './Suction.tsx';
import { Vise } from './Vise.tsx';
import { Payload2 } from './Payload1.tsx';
import './Project.css';

export const All3D = () => {
  return <div className='flex-col text-center items-center justify-center bg-brand-300'>
    <h1 className='font-bold transition-all duration-500 text-shadow-xl hover:text-shadow-lg p-4vh project-dashing project-new-font-3d bg-clip-text text-transparent mb-4'>My Three Demensional Designs.</h1>
    <h2 className='pb-1vh font-bold transition-all duration-500 text-shadow-xl hover:text-shadow-lg text-3xl'>Buckeye Veritcal Payload Design</h2>
    <p>I used Solidworks to create these parts and assembly the analysis is still in Development.</p>
    <p className='font-semibold'>(You can click and drage to move item as well as zoom with scroll wheel)</p>
    <div className='p-5vh'>
      <Payload2 />
    </div>


    <h2 className='pb-1vh font-bold transition-all duration-500 text-shadow-xl hover:text-shadow-lg text-3xl'>Multi-use desk basket</h2>
    <p>I used onshape to create these parts above is the Assembly and below are seperate parts.</p>
    <p className='font-semibold'>(You can click and drage to move item as well as zoom with scroll wheel)</p>
    <div className='p-5vh'>
      <Assembly />
    </div>
    <div className='p-5vh'>
      <ClampBase />
    </div>
    <div className='p-5vh'>
      <ClampTop />
    </div>
    <div className='p-5vh'>
      <CHook />
    </div>
    <div className='p-5vh'>
      <HookAttach />
    </div>
    <div className='p-5vh'>
      <Suction />
    </div>
    <div className='p-5vh'>
      <Vise />
    </div>
  </div>
}