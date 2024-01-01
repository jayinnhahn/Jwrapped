'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';

interface SpotifyConfig {
	CLIENT_ID: string;
	REDIRECT_URL: string;
	AUTH_ENDPOINT: string;
	RESPONSE_TYPE: string;
}

const Home: React.FC = () => {
	const SpotifiyConfigData: SpotifyConfig = {
		CLIENT_ID: 'e7d1d801f1384e3895797ce7840a0369',
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

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				{!token ? (
					<LoginPage data={SpotifiyConfigData} />
				) : (
					<HomePage logout={logout} />
				)}
			</div>
		</main>
	);
};

export default Home;
