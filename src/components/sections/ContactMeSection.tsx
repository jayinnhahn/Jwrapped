import React from "react";
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import JwrappedLogo from "@/../public/Image/Jwrppedlogo.png";
import Image from "next/image";

const socialIconsData = [
  { url: "https://www.facebook.com/jayinnhahn", label: "Facebook", icon: FaFacebookF },
  { url: "https://www.instagram.com/innhahn", label: "Instagram", icon: FaInstagram },
  { url: "https://github.com/jayinnhahn", label: "Github", icon: FaGithub },
  { url: "https://www.linkedin.com/in/jayinnhahn/", label: "Linkedin", icon: FaLinkedin },
];

export const ContactMeSection = () => {
  return (
    <div className="bg-beige py-12 px-6 md:px-12 flex flex-col items-center">
      {/* Logo */}
      <div className="relative w-16 h-16 md:w-24 md:h-24 mb-4">
        <Image src={JwrappedLogo} alt="Jwrapped Logo" className="object-contain" fill draggable={false} />
      </div>

      <h1 className="text-darkgreen font-Monotage tracking-wider text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-4">
        CONNECT WITH ME
      </h1>
      <div className="flex justify-center space-x-4 mt-5">
        {socialIconsData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="bg-darkgreen text-white p-3 rounded-full hover:bg-green transition duration-300"
          >
            <item.icon size={24} />
          </a>
        ))}
      </div>

      <div className="mt-6">
        <a
        href="mailto:jaytan3825@gmail.com"
        className="bg-darkgreen text-white font-Monotage py-2 px-6 rounded-lg hover:bg-green transition duration-300"
        >
          Email Me
        </a>
      </div>

      <div className='mt-20'>
					<h3> Made By Jay Tan</h3>
				</div>
    </div>
  );
};

export default ContactMeSection;
