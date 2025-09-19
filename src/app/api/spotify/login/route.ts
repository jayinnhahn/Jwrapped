import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const scope = 'user-top-read';

  // 📝 Log environment values (never log secrets in production!)
  console.log('SPOTIFY_CLIENT_ID:', clientId);
  console.log('SPOTIFY_REDIRECT_URI:', redirectUri);

  if (!clientId || !redirectUri) {
    console.error('Spotify login failed: missing env variables');
    return NextResponse.json({ error: 'Missing Spotify env variables' }, { status: 500 });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

  console.log('Redirecting to Spotify auth URL:', authUrl);

  return NextResponse.redirect(authUrl);
}