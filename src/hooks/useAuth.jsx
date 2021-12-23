import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useAuth = () => {
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return token;
};

export default useAuth;
