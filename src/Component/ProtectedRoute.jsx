import React from 'react';
import { Navigate } from 'react-router';
import { useUserAuth } from '../Context/UseAuthContext';

const ProtectedRoute = ({children}) => {
  let {user} = useUserAuth();

  if (!user) {
    return <Navigate to='/' />
  }
  return children;
}

export default ProtectedRoute
