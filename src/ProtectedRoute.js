import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProtectedRoute = ({ component: Component, role, ...rest  }) => {
    const decoded = jwt.decode(localStorage.getItem('token'))

  return (
    <Route {...rest} render={
      props => {
        if (decoded === role || role === 6) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;