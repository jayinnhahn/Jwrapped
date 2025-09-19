import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) return NextResponse.json({ error: 'No code provided' }, { status: 400 });

  try {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
      client_id: process.env.SPOTIFY_CLIENT_ID!,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
    });

    const response = await axios.post('https://accounts.spotify.com/api/token', params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const { access_token, refresh_token, expires_in } = response.data;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = NextResponse.redirect(baseUrl);

    res.cookies.set('spotify_access_token', access_token, { httpOnly: true, path: '/' });
    res.cookies.set('spotify_refresh_token', refresh_token, { httpOnly: true, path: '/' });

    return res;
  } catch (err: any) {
    console.error('Token exchange error:', err.response?.data || err.message);
    return NextResponse.json({ error: 'Token exchange failed' }, { status: 500 });
  }
}