import React from 'react';
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



function PDFViewer() {
  const newplugin = defaultLayoutPlugin();

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl='../../../public/pdf/Paintball.pdf' plugins={[newplugin]} />
      </Worker>
    </div>
  )
}

export default PDFViewer