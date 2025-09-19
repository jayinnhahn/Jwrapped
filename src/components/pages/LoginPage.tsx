import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/ui/Navbar';
import JwrappedLogo from '@/../public/Image/Jwrppedlogo.png';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    window.location.href = '/api/spotify/login';
  };

  const [Words] = useTypewriter({
    words: ['TRACKS', 'ARTISTS'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="min-h-screen bg-beige flex flex-col items-center justify-center px-6">
      <Navbar/>
      <header className="flex flex-col items-center text-center w-full max-w-4xl">
        <div className="relative w-[3rem] h-[3rem] md:w-[8rem] md:h-[8rem]">
          <Image src={JwrappedLogo} alt="Jwrapped Logo" className="object-contain" draggable={false} />
        </div>
        <h1 className="text-darkgreen font-Monotage tracking-wider text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-4">
          FIND YOUR TOP <span className="text-newgreen">{Words}</span> <Cursor />
        </h1>
        <p className="font-Roboto font-normal text-sm md:text-lg text-darkgreen mt-2">
          Discover your top tracks & artists in a Wrapped-style format.
        </p>
        <button
          onClick={handleLogin}
          className="mt-4 px-6 py-2 md:px-8 md:py-3 bg-darkgreen text-white border-2 border-darkgreen rounded-lg text-sm md:text-lg font-Monotage transition-all duration-300 hover:bg-spotify hover:border-spotify"
          aria-label="Login to Spotify Here"
        >
          Login to Spotify
        </button>
        <div className='mt-20'>
          <h3>Made By Jay Tan</h3>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;