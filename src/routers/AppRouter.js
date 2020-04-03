import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Manage from '../views/Manage'
import Login from '../views/Login'
import Post from '../views/Post'

import Header from '../views/Header'
import Footer from '../views/Footer'
import { AuthProvider } from '../context/auth-context'

const AppRouter = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/posts/:slug" component={Post} exact />
        <PrivateRoute path="/edit" component={Manage} />
        <PrivateRoute path="/add" component={Manage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </AuthProvider>
)

export default AppRouter
