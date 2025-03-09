"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import JwrappedLogo from "@/../public/Image/Jwrppedlogo.png";

export default function NotFound() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen bg-beige">
			<div className="flex-grow flex-col flex justify-center items-center mx-10">
				<div className="relative w-[3rem] h-[3rem] md:w-[6rem] md:h-[6rem]">
					<Image
						src={JwrappedLogo}
						alt="Jwrapped Logo"
						className="object-contain"
						draggable={false}
					/>
				</div>
				<h1 className="text-xl xsm:text-2xl sm:text-4xl font-bold font-rightGroteskCompactBlack uppercase mb-1 text-left">
					Oops! It seems there&rsquo;s nothing here.
				</h1>
				<button
					className="mt-4 px-6 py-2 md:px-8 md:py-3 tracking-wide bg-darkgreen text-white border-2 border-darkgreen rounded-lg text-sm md:text-lg font-Monotage transition-all duration-300 hover:bg-spotify hover:border-spotify"
					aria-label="Redirect Homepage"
					onClick={() => router.push("/")}
				>
					Get Back
				</button>
			</div>
		</div>
	);
}
