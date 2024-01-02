import React from 'react';

interface LoginPageProps {
	data: {
		CLIENT_ID: string;
		REDIRECT_URL: string;
		AUTH_ENDPOINT: string;
		RESPONSE_TYPE: string;
	};
}
const LoginPage: React.FC<LoginPageProps> = ({ data }) => {
	const handleLogin = () => {
		const authUrl = `${data.AUTH_ENDPOINT}?client_id=${data.CLIENT_ID}&redirect_uri=${data.REDIRECT_URL}&response_type=${data.RESPONSE_TYPE}&scope=user-top-read`;
		window.location.href = authUrl;
	};
	return (
		<div>
			<p>Innhahnify</p>
			<button onClick={handleLogin}>Login to Spotify</button>
		</div>
	);
};

export default LoginPage;
