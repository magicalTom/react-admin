import { getToken } from '@/utils/token';
import React, { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Permissions: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/login' && !getToken()) {
      navigate('/login', { replace: true });
    }
  }, [location, navigate]);

  return <>{children}</>;
};

export default Permissions;
