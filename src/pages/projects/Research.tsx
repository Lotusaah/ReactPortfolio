import React from 'react';
import './Research.css';
import afmImage from '../../../public/images/Screenshot 2024-12-26 205124.png'

export const Research = () => {
  return (
    <div className="min-h-screen bg-brand-300 overflow-auto">
      {/* Header */}
      <header className="bg-brand-300 text-center flex items-center justify-center">
      <h1 className='font-bold transition-all duration-500 text-shadow-xl hover:text-shadow-lg research-dashing research-new-font-3d bg-clip-text text-transparent'> Atomic Force Microscopy (AFM) & Cantilever Designs</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center research-moody transition-all duration-500">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Overview of AFM</h2>
            <p className="text-slate-600 leading-relaxed">
              Atomic Force Microscopy (AFM) is a high-resolution imaging technique that enables researchers to study the surface topography of materials at the nanometer scale. AFM operates by using a sharp cantilever tip to interact with the surface of a sample, detecting minute forces between the tip and the surface to create detailed images.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              This powerful tool is used across various fields, including material science, biology, and nanotechnology, to analyze structures, mechanical properties, and molecular interactions.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src='../../../public/images/Screenshot 2024-12-26 205124.png'
              alt="AFM Illustration"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
            <div className=''>Source: University of Greifswald</div>
          </div>
        </section>

        {/* Cantilever Design Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center research-moody transition-all duration-500">
          <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
            <img
              src="../../../public/images/Screenshot 2024-12-26 204925.png"
              alt="Cantilever Designs"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
            <div>Source:<a className='text-blue-700' target='_blank' href='https://mae.osu.edu/mnmdl'>MNMDL OSU</a></div>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Cantilever Designs</h2>
            <p className="text-slate-600 leading-relaxed">
              Cantilevers are the most critical component in AFM. Their design affects sensitivity, resolution, and stability.
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-4">
              <li>
                <span className="font-semibold text-slate-800">Rectangular Cantilevers:</span>  A flat beam with a sharp tip at the end. Usually made of silicon and coated with metal.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Triangular Cantilevers:</span> A wedge that turns narrower towards the end or tip of the cantilever. It is ideal for soft samples and hiher flexability.
              </li>
              <li>
                <span className="font-semibold text-slate-800">V-Shaped Cantilevers:</span> "V" shaped, hence the name. Great for contact mode, due to its reduced lateral forces, as well as minimizing twisting.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Custom Inner Paddle Cantilevers:</span> Specialized for mitigating cross talk between two characteristics specifically topography and piezoelectric response.
              </li>
              
            </ul>
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 research-moody transition-all duration-500">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Applications of AFM and Cantilevers</h2>
          <p className="text-slate-600 leading-relaxed">
            AFM is widely used for applications such as:
          </p>
          <ul className="list-disc list-inside text-slate-600 mt-4">
            <li>Analyzing surface roughness in semiconductor manufacturing.</li>
            <li>Studying biological samples like DNA and proteins.</li>
            <li>Characterizing nanomaterials for enhanced performance.</li>
          </ul>
          <div className="mt-6 flex flex-col justify-center">
            <img
              src="../../../public/images/VicACCollogen3.6v.PNG"
              alt="Applications of AFM"
              className="rounded-lg shadow-lg w-full "
            />
            <div>Source: Me(My own image of Collagen)</div>
          </div>
        </section>
      </main>

    </div>
  );
};
