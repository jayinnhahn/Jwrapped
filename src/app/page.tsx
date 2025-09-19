'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/pages/LoginPage';
import HomePage from '@/components/pages/HomePage';

const Home: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const logout = async () => {
    await fetch('/api/spotify/logout', { method: 'POST' }); // optional endpoint to clear session
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // check if user is logged in via session cookie
    fetch('/api/spotify/top', { credentials: 'include' })
      .then(res => {
        if (res.status === 401) return false; // not authenticated
        return true;
      })
      .then(auth => setIsAuthenticated(auth))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <p>Loading...</p>; // show loading while checking

  return (
    <main className="bg-beige w-full pt-5">
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <HomePage logout={logout} />
      )}
    </main>
  );
};

export default Home;