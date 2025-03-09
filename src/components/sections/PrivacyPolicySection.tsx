import React from "react";
import Image from "next/image";
import JwrappedLogo from "@/../public/Image/Jwrppedlogo.png";

export const PrivacyPolicySection = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-4xl px-6 md:px-12">
          <div className="relative w-[3rem] h-[3rem] md:w-[8rem] md:h-[8rem]">
      <Image
        src={JwrappedLogo}
        alt="Jwrapped Logo"
        className="object-contain"
        draggable={false}
      />
    </div>
      <h1 className="text-darkgreen font-Monotage tracking-wider text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-4">
        PRIVACY POLICY
      </h1>

      <p className="font-Roboto font-normal text-sm md:text-lg text-darkgreen mt-2">
        Jwrapped is an open-source app that fetches your top Spotify tracks. It uses the
        Spotify Web API to retrieve your top tracks and artists. Your data is only used to generate
        your Wrapped experience.
      </p>

      <p className="font-Roboto font-normal text-sm md:text-lg text-darkgreen mt-2">
        Jwrapped does <span className="font-bold">NOT</span> store, collect, or share any data with third parties.
      </p>

      <div className='mt-20'>
					<h3> Made By Jay Tan</h3>
			</div>
    </div>
  );
};

export default PrivacyPolicySection;
