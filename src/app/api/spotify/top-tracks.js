import axios from 'axios';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
	try {
		const { access_token, time_range, limit, offset } = req.query;

		if (!access_token) {
			return res.status(400).json({ error: 'Access token is required' });
		}

		if (!time_range) {
			return res.status(400).json({ error: 'Time range is required' });
		}

		const params = {
			time_range: time_range,
			limit: limit || 10,
			offset: offset || 0,
		};

		const topTracks = await axios.get(
			'https://api.spotify.com/v1/me/top/tracks',
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
				params: params,
			}
		);
		return NextResponse.json(topTracks);
	} catch (error) {
		console.error('Error fetching top tracks:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
