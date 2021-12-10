import React, { useState, useEffect } from 'react';
export const SESSION_STORAGE_KEY = 'token';

const useToken = () => {
  const [token, setToken] = useState(token);
  useEffect(() => {
    setToken(token);
  }, []);
  return <></>;
};

export default useToken;
