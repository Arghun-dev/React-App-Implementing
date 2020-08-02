import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../screens/Home'

export default function LoginRoutes() {
  return (
    <div style={{ flex: 1 }}>
      <Route exact path="/" component={Home} />
    </div>
  )
}
