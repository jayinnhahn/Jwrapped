import React from 'react';
import PictureImage from '@/../public/Image/picture.jpg';
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const socialIconsData = [
	{
		url: 'https://www.facebook.com/jayinnhahn',
		label: 'Facebook',
		icon: FaFacebookF,
	},
	{
		url: 'https://www.instagram.com/innhahn',
		label: 'Instagram',
		icon: FaInstagram,
	},
	{ url: 'https://github.com/jayinnhahn', label: 'Github', icon: FaGithub },
	{
		url: 'https://www.linkedin.com/in/jayinnhahn/',
		label: 'Linkedin',
		icon: FaLinkedin,
	},
];

export const ContactMeSection = () => {
	const controls = useAnimation();

	const handleInView = (inView: boolean) => {
		if (inView) {
			controls.start({ rotate: 0, scale: 1 });
		} 
	};

	return (
		<motion.div
			initial={{ translateY: 100, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }} 
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
			onViewportEnter={() => handleInView(true)}
			className="bg-green rounded-t-[20px] lg:rounded-t-[40px] h-fit mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 py-4 px-8 md:px-16 md:py-8  gap-8 lg:gap-16 justify-between w-full">
					<div className="">
						<h2 className="font-Monotage text-beige justify-self-start leading-none text-center md:text-left text-[4rem] md:text-[6rem] lg:text-[11rem]">
							Contact Me
						</h2>
						<p className="text-beige text-justify lg:text-left font-normal text-[1rem] md:text-[1.5rem] mt-4">
							Hello please take time to enjoy my website. Just for funsies ko
							lang to hehehe. Please follow me on spotify para cute hehe
						</p>
					</div>
					<div className="lg:my-20 my-10 flex justify-center md:justify-self-end">
						<a
							href="https://open.spotify.com/user/12140322647"
							aria-label="Link to Spotify profile"
						>
							<div className="relative h-60 w-60 rounded-full border-4 border-darkgreen align-top active:animate-spin">
								<Image
									src={PictureImage}
									alt="Jay Picture"
									className="object-cover rounded-full"
									draggable={false}
									sizes="(max-width: 240px)"
									fill
								/>
							</div>
						</a>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full bg-darkgreen py-4 px-8">
					<p className="text-beige font-roboto font-bold text-[1rem] md:text-[1.5rem]">
						YOU CAN CONTACT ME THRU THE FOLLOWING LINKS
					</p>
					<div>
						<div className="grid grid-flow-col w-fit gap-x-5 mt-2 md:ml-auto text-beige">
							{socialIconsData.map((iconData, index) => (
								<a href={iconData.url} key={index} aria-label={iconData.label}>
									<iconData.icon className="w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in active:text-neworange" />
									<span className="sr-only">{iconData.label}</span>
								</a>
							))}
						</div>
					</div>
				</div>
		</motion.div>
	);
};
