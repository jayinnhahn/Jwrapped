import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface HomePageProps {
	logout: () => void;
	token: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	const [timeRange, setTimeRange] = useState('medium_term');

	const fetchTopTracks = async () => {
		try {
			const accessToken = token;
			const response = await axios.get('/api/spotify/top-tracks', {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
				params: {
					time_range: timeRange,
				},
			});

			const topTracksData = response.data;
			console.log(topTracksData);
		} catch (error) {
			console.error('Error fetching top users and tracks:', error);
		}
	};

	return (
		<div>
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
			<button onClick={fetchTopTracks}>Fetch Top Tracks</button>
			<button onClick={logout}>Logout</button> */}
		</div>
	);
};

export default HomePage;
