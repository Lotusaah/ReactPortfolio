import React from 'react';
import './Research.css';

export const Research = () => {
  return (
    <div className="min-h-screen bg-slate-100 overflow-auto">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center px-4">
          Atomic Force Microscopy (AFM) & Cantilever Designs
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Overview of AFM</h2>
            <p className="text-slate-600 leading-relaxed">
              Atomic Force Microscopy (AFM) is a high-resolution imaging technique that enables researchers to study the surface topography of materials at the nanometer scale. AFM operates by using a sharp cantilever tip to interact with the surface of a sample, detecting minute forces between the tip and the surface to create detailed images.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              This powerful tool is used across various fields, including material science, biology, and nanotechnology, to analyze structures, mechanical properties, and molecular interactions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/300"
              alt="AFM Illustration"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
        </section>

        {/* Cantilever Design Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center">
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <img
              src="https://via.placeholder.com/300"
              alt="Cantilever Designs"
              className="rounded-lg shadow-lg w-full md:w-3/4"
            />
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Cantilever Designs</h2>
            <p className="text-slate-600 leading-relaxed">
              Cantilevers are the most critical component in AFM. Their design affects sensitivity, resolution, and stability. Below are the main types of cantilever designs used in AFM:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-4">
              <li>
                <span className="font-semibold text-slate-800">Triangular Cantilevers:</span> High stability, used in contact mode.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Rectangular Cantilevers:</span> Enhanced sensitivity, used in tapping mode.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Custom Nanotube Cantilevers:</span> Specialized for high-resolution imaging.
              </li>
            </ul>
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Applications of AFM and Cantilevers</h2>
          <p className="text-slate-600 leading-relaxed">
            AFM is widely used for applications such as:
          </p>
          <ul className="list-disc list-inside text-slate-600 mt-4">
            <li>Analyzing surface roughness in semiconductor manufacturing.</li>
            <li>Studying biological samples like DNA and proteins.</li>
            <li>Characterizing nanomaterials for enhanced performance.</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Applications of AFM"
              className="rounded-lg shadow-lg w-full md:w-1/2"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center py-4 mt-auto">
        <p className="text-sm md:text-base">© 2024 Research on AFM & Cantilever Designs. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
