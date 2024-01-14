import React from 'react';

const AboutModal = () => {
	return (
		<div className="grid content-between bg-neworange rounded-[40px] h-fit w-full px-16 py-8 gap-16">
			<h2 className="font-Monotage justify-self-start leading-none text-[17rem] ">
				About
			</h2>
			<div className="justify-self-end lg:w-[40rem]">
				<p className="text-right font-black text-[1.5rem]">
					Inspired by Receiptify, Jayify is a tool to showcase the top artist
					and top songs the user has in the last week, last 6 months and all
					time favorites, But its structure is more on a Spotify Wrapped type of
					vibe.
				</p>
			</div>
		</div>
	);
};

export default AboutModal;
