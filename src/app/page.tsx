'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/LoginPage';
import axios, { AxiosError } from 'axios';
import HomePage from '@/components/HomePage';
interface SpotifyConfig {
	CLIENT_ID: string;
	REDIRECT_URL: string;
	AUTH_ENDPOINT: string;
	RESPONSE_TYPE: string;
}

const fetchDataFromSpotify = async (
	accessToken: string,
	timeRange: string
): Promise<any> => {
	try {
		const response = await axios.get('http://localhost:3000/api/spotify', {
			// headers: {
			// 	Authorization: 'Bearer ' + accessToken,
			// },
			params: {
				time_range: timeRange,
				access_token: accessToken,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error fetching top users and tracks:', error);

		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Response status:', axiosError.response?.status);
			console.error('Response data:', axiosError.response?.data);
		}

		throw error;
	}
};

const Home: React.FC = () => {
	const SpotifiyConfigData: SpotifyConfig = {
		CLIENT_ID: '4621d4797def4a7ca7d70507fac9a08b',
		REDIRECT_URL: 'http://localhost:3000',
		AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
		RESPONSE_TYPE: 'token',
	};

	const [token, setToken] = useState<string | null>('');
	const [timeRange, setTimeRange] = useState<string>('medium_term');

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
			if (token !== null) {
				const accessToken = token;
				const topTracksData = await fetchDataFromSpotify(
					accessToken,
					timeRange
				);
				console.log(topTracksData);
			} else {
				console.error('Access token is null.');
			}
		} catch (error) {
			// Handle the error if needed
		}
	};

	return (
		<main className="bg-beige w-full pt-5">
			{' '}
			{!token ? (
				<div>
					<LoginPage data={SpotifiyConfigData} />
				</div>
			) : (
				<div className="w-full">
					<HomePage logout={logout} token={token} />
					{/* <p> {token}</p>
						<button onClick={logout}>Logout</button>
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
						</div> */}
				</div>
			)}
		</main>
	);
};

export default Home;
