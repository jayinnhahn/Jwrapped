import React, { useEffect, useState } from 'react';
import LandingPageModal from './LandingPageModal';
import Breaker from './Breaker';
interface HomePageProps {
	logout: () => void;
	token: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	const [timeRange, setTimeRange] = useState('medium_term');
	const [topTracksData, setTopTracksData] = useState(null);

	const fetchTopTracks = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/spotify`);

			if (!response.ok) {
				throw new Error(`123! Status: ${response.status}`);
			}

			const data = await response.json();
			setTopTracksData(data);
		} catch (error) {
			console.error('Error fetching top tracks:', error);
		}
	};

	return (
		<div className="bg-beige w-full pt-5">
			<div className="h-screen">
				<div className="flex justify-center">
					<h1 className="font-Monotage text-center text-newgreen lg:text-[11rem] tracking-wide font-bold lg:w-[48rem] leading-none ">
						HOMEPAGE
					</h1>
				</div>
				{/* <LandingPageModal /> */}
			</div>
			{/* <h2>Top Users and Their Tracks</h2>
			<label htmlFor="timeRange">Select Time Range:</label>
			<select
				id="timeRange"
				value={timeRange}
				onChange={(e) => setTimeRange(e.target.value)}
			>
				<option value="short_term">3 months</option>
				<option value="medium_term">6 months</option>
				<option value="long_term">1 year</option>
			</select>
			<button onClick={fetchTopTracks}>Fetch Top Tracks</button> */}
			<button onClick={logout}>Logout</button>
			{/* 
			{topTracksData && (
				<div>
					<h3>Top Tracks Data:</h3>
					<pre>{JSON.stringify(topTracksData, null, 2)}</pre>
				</div>
			)} */}
		</div>
	);
};

export default HomePage;
