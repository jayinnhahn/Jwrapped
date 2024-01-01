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
	return (
		<div>
			<p>Innhahnify</p>
			<a
				href={`${data.AUTH_ENDPOINT}?client_id=${data.CLIENT_ID}&redirect_uri=${data.REDIRECT_URL}&response_type=${data.RESPONSE_TYPE}`}
			>
				Login to Spotify
			</a>
		</div>
	);
};

export default LoginPage;
