import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	// const { access_token, time_range } = req.query;
	// return NextResponse.json({});
	try {
		// const { access_token, time_range } = req.query;
		// if (!access_token) {
		// 	return res.status(400).json({ error: 'Access token is required' });
		// }
		// if (!time_range) {
		// 	return res.status(400).json({ error: 'Time range is required' });
		// }
		// const params = {
		// 	time_range: time_range,
		// 	limit: 10,
		// 	offset: 0,
		// };
		// const apiResponse = await axios.get(
		// 	`https://api.spotify.com/v1/me/top/tracks?time_range=${params.time_range}&limit=${params.limit}&offset=${params.offset}`,
		// 	{
		// 		headers: {
		// 			Authorization: `Bearer ${access_token}`,
		// 		},
		// 	}
		// );
		// return NextResponse.json({ access_token, time_range });

		return NextResponse.json(response.data);
	} catch (error) {
		console.error('Error fetching top tracks: Axios Problem', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
