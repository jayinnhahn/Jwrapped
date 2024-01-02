'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import axios from 'axios';

interface SpotifyConfig {
	CLIENT_ID: string;
	REDIRECT_URL: string;
	AUTH_ENDPOINT: string;
	RESPONSE_TYPE: string;
}

const Home: React.FC = () => {
	const SpotifiyConfigData: SpotifyConfig = {
		CLIENT_ID: '4621d4797def4a7ca7d70507fac9a08b',
		REDIRECT_URL: 'http://localhost:3000',
		AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
		RESPONSE_TYPE: 'token',
	};

	const [token, setToken] = useState<string | null>('');

	useEffect(() => {
		const hash = window.location.hash;
		let tokenFromStorage = window.localStorage.getItem('token');

		if (!tokenFromStorage && hash) {
			const accessTokenParam = hash
				.substring(1)
				.split('&')
				.find((elem) => elem.startsWith('access_token'));

			if (accessTokenParam) {
				tokenFromStorage = accessTokenParam.split('=')[1];

				window.location.hash = '';
				window.localStorage.setItem('token', tokenFromStorage);
			}
		}

		setToken(tokenFromStorage);
	}, []);

	const logout = () => {
		setToken('');
		window.localStorage.removeItem('token');
	};
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

	const [timeRange, setTimeRange] = useState('medium_term');

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				{!token ? (
					<div>
						<LoginPage data={SpotifiyConfigData} />
					</div>
				) : (
					<div>
						<HomePage logout={logout} token={token} />
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
							<button onClick={fetchTopTracks}>Fetch Top Tracks</button>
							{/* <button onClick={fetchTopArtists}>Fetch Top Artists</button> */}
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Home;
