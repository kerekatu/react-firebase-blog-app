import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../context/auth-context'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import ArticleView from '../views/ArticleView'
import ManageView from '../views/ManageView'
import NotFoundView from '../views/NotFoundView'

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <PublicRoute path="/" component={HomeView} exact />
          <PublicRoute path="/login" component={LoginView} />
          <PublicRoute path="/posts/:slug" component={ArticleView} exact />
          <PublicRoute path="/categories/:slug" component={HomeView} exact />
          <PrivateRoute path="/edit/:slug" component={ManageView} exact />
          <PrivateRoute path="/add" component={ManageView} />
          <Route component={NotFoundView} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default AppRouter
