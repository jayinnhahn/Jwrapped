import React from "react";
import JwrappedLogo from '@/../public/Image/Jwrppedlogo.png';
import Image from "next/image";
export const AboutSection = () => {
  return (
    <header className="flex flex-col items-center text-center w-full max-w-4xl">
    <div className="relative w-[3rem] h-[3rem] md:w-[8rem] md:h-[8rem]">
      <Image
        src={JwrappedLogo}
        alt="Jwrapped Logo"
        className="object-contain"
        draggable={false}
      />
    </div>

    <h1 className="text-darkgreen font-Monotage tracking-wider text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-4">
      ABOUT JWRAPPED
    </h1>

    <p className="font-Roboto font-normal text-sm md:text-lg text-darkgreen mt-2">
    Inspired by Receiptify, Jwrapped is a tool that showcases your top artists
          and songs from the last week, last 6 months, and all-time favorites—
          designed with a Spotify Wrapped-style experience.    </p>


      <div className='mt-20'>
				<h3> Made By Jay Tan</h3>
			</div>
  </header>
  );
};
