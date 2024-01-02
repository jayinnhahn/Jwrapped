import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// import ShowUsersTopValues from './ShowUsersTopValues';
interface HomePageProps {
	logout: () => void;
	token: string;
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	// const [topArtists, setTopArtists] = useState([]);
	const [timeRange, setTimeRange] = useState('medium_term');
	const fetchTopTracks = async () => {
		try {
			const accessTokens = token;

			const response = await axios.get(`/api/spotify/top-tracks`, {
				params: {
					access_tokens: accessTokens,
					time_range: timeRange,
				},
			});

			const topTracksData = response.data;

			console.log(topTracksData);
		} catch (error) {
			console.error('Error fetching top users and tracks:', error);
		}
	};
	async function getProfile() {
		let accessToken = localStorage.getItem('access_token');

		const response = await fetch('https://api.spotify.com/v1/me', {
			headers: {
				Authorization: 'Bearer ' + accessToken,
			},
		});

		const data = await response.json();
		console.log('this is the data bitch', data);
	}
	return (
		<div>
			HomePage
			<button onClick={logout}> Logout </button>
			{/* <ShowUsersTopValues /> */}
			<div>
				<h2>Top Users and Their Tracks</h2>
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
				<button onClick={getProfile}>Fetch Top Tracks</button>
				{/* <button onClick={fetchTopArtists}>Fetch Top Artists</button> */}
			</div>
		</div>
	);
};

export default HomePage;
