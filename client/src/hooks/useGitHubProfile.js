import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch GitHub profile data from the Express backend API
 */
export function useGitHubProfile(username) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/github/profile/${username}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }
        
        const data = await response.json();
        setProfile(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  return { profile, loading, error };
}
