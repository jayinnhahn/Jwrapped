'use client';
import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import LoginPage from '@/components/pages/LoginPage';
import HomePage from '@/components/pages/HomePage';

const Home: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const logout = useCallback(async () => {
    try {
      await axios.post('/api/spotify/logout', {}, { withCredentials: true });
    } catch (err) {
      console.error('Logout failed', err);
    } finally {
      setIsAuthenticated(false);
    }
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get('/api/spotify/top', { withCredentials: true });
      setIsAuthenticated(true);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        setIsAuthenticated(false);
      } else {
        console.error('Auth check failed', err);
        setIsAuthenticated(false);
      }
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isAuthenticated === null) return <p>Loading...</p>;

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