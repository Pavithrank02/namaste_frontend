import React from 'react'

const app = () => {
  //authentication logic
  const isAuthenticated = true
  return (
    isAuthenticated ? < Outlet /> : <Navigate to="/login" />
  )
}

export default app