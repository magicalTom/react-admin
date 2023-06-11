import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Permissions: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      console.log(location.pathname);
    }
  }, [location]);

  return <>{children}</>;
};

export default Permissions;
