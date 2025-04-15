import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      </nav>

      <h1 className='head_text'>
        Résumer les articles avec <br className='max-md:hidden' />
        <span className='orange_gradient '>AI</span>
      </h1>
      <h2 className='desc'>
      Simplifiez votre lecture avec Summize, un outil de synthèse d'articles open 
      source qui transforme les longs articles en résumés clairs et concis.
      </h2>
    </header>
  );
};

export default Hero;
