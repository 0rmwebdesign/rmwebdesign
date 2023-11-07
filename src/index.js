import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./imgDisplay";
import Zoom from "./contactBox"
//import imgdisplay from './imgDisplay';
//import contactbox from './contactBox';

//<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <body className="min-h-screen bg-gradient-to-b from-indigo-400 to-cyan-400 p-4">
    <h1 className="ml-70 border-2 w-32 rounded p-1 mb-10 text-white font-sans  text-3xl">M&R DESIGN</h1>
    <div className="grid grid-cols-2 gap-x-9 grid-rows-2 ml-80 mr-80">
    <App className=""/>
    <Zoom className=""/>
    <div className="bg-slate-50 p-4 mt-4 w-84 h-72 col-span-2 drop-shadow-md rounded bg-opacity-20 backdrop-blur-lg">            
    <h1 className="ml-4 mt-4 text-3xl font-sans">About Us</h1>
    <p className="ml-4 mt-4 text-xl font-sans">We are a duo of web developers and marketers looking to make your website stand out from the rest by doing the following:</p>
    <ul className="ml-12 list-disc mt-4 text-xl font-sans">
      <li>Developing aesthetic websites</li>
      <li>Developing SEO optimized websites</li>
      <li>Developing fast and user friendly websites</li>
    </ul>
    </div>
    </div>
  </body>
);


