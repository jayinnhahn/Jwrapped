import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get('category') ?? 'tracks';
  const timeRange = url.searchParams.get('timeRange') ?? 'medium_term';

  const token = cookies().get('spotify_access_token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/me/top/${category}?time_range=${timeRange}&limit=5`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return NextResponse.json(data);
  } catch (err: any) {
    console.error(err.response?.data || err);
    return NextResponse.json({ error: 'Spotify API error' }, { status: 500 });
  }
}