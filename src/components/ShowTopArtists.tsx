// import { useState, useEffect } from 'react';

// const YourComponent = () => {
// 	const [topArtists, setTopArtists] = useState<Artist[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch(
// 					'/api/top-artists?access_token=YOUR_ACCESS_TOKEN&time_range=short_term'
// 				);
// 				const data: SpotifyResponse = await response.json();
// 				setTopArtists(data.items);
// 			} catch (error) {
// 				console.error('Error fetching top artists:', error);
// 				setError('Error fetching top artists');
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	if (loading) {
// 		return <p>Loading...</p>;
// 	}

// 	if (error) {
// 		return <p>{error}</p>;
// 	}

// 	return (
// 		<div>
// 			<h1>Top Artists</h1>
// 			<ul>
// 				{topArtists.map((artist) => (
// 					<li key={artist.id}>{artist.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default YourComponent;
