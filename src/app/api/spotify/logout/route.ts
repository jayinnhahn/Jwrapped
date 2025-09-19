import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = cookies();

  // Delete the Spotify access token cookie
  cookieStore.delete({ name: 'spotify_access_token', path: '/' });

  // Optionally, delete refresh token
  cookieStore.delete({ name: 'spotify_refresh_token', path: '/' });

  return NextResponse.json({ message: 'Logged out successfully' });
}