import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import LandingPageImage from '../../public/Image/LandingPageImage.png';

const roboto = Roboto({
	weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
	style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
	subsets: ['latin'],
});
interface LandingPageModalProps {
	onLogin: () => void;
}
const LandingPageModal: React.FC<LandingPageModalProps> = ({ onLogin }) => {
	return (
		<div className="relative flex justify-center lg:h-[40rem] rounded-3xl">
			<Image
				src={LandingPageImage}
				alt="RecWeekHeaderImage"
				className="object-cover rounded-[60px]"
				placeholder="blur"
				draggable={false}
				fill
			/>
			<div className="flex flex-col justify-center align-center z-10 text-white">
				<h1 className="font-Monotage text-center lg:w-[50rem] lg:text-[6rem] tracking-normal leading-none font-light mb-2">
					KNOW WHO YOUR FAVORITE ARTISTS ARE
				</h1>
				<div className="font-Roboto font-light lg:text-[1.5rem] text-center flex ">
					Click on the button below to know more about Jayify
				</div>

				<button
					onClick={onLogin}
					className="font-Monotage w-[22.625rem] text-darkgreen bg-white border-4 border-darkgreen lg:text-[1.5rem] px-4 rounded-[40px]"
				>
					Login to Spotify Here
				</button>
			</div>
		</div>
	);
};

export default LandingPageModal;
