import { useState } from 'react';
import React from 'react';

interface HomePageProps {
	logout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ logout }) => {
	const [topArtists, setTopArtists] = useState([]);

	return (
		<div>
			HomePage
			<button onClick={logout}> Logout </button>
		</div>
	);
};

export default HomePage;
