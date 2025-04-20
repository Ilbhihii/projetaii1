import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <svg width="260" height="80" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#5F0AFF"/>
              <stop offset="100%" stop-color="#00E0FF"/>
            </linearGradient>
          </defs>
          <g transform="translate(10,15)">
            <rect x="0" y="0" width="30" height="40" rx="4" fill="url(#grad2)" opacity="0.1" stroke="#5F0AFF" stroke-width="1"/>
            <line x1="6" y1="10" x2="24" y2="10" stroke="#5F0AFF" stroke-width="1.5"/>
            <line x1="6" y1="17" x2="22" y2="17" stroke="#5F0AFF" stroke-width="1.2"/>
            <line x1="6" y1="24" x2="20" y2="24" stroke="#5F0AFF" stroke-width="1.2"/>
            <path d="M32 10 C40 5, 50 5, 55 15 C60 25, 50 35, 40 30 L35 33 L36 27 C30 23, 30 15, 32 10 Z" fill="url(#grad2)" opacity="0.8"/>
          </g>
          <text x="80" y="50" font-family="Poppins, sans-serif" font-size="30" font-weight="600" fill="url(#grad2)">
          Synthesia
          </text>
        </svg>
      </nav>

      <h1 className='head_text'>
        Résumer les articles avec <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-violet-600 to-blue-400 bg-clip-text text-transparent'>AI</span>
      </h1>
      <h2 className='desc'>
      Simplifiez votre lecture avec Synthesia, un outil de synthèse d'articles open 
      source qui transforme les longs articles en résumés clairs et concis.
      </h2>
    </header>
  );
};

export default Hero;
