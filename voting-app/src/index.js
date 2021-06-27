import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import SignUpForm from './components/signup';
import LoginForm from "./components/login";
import HomePage from './components/homepage';
import ForgotPasswordForm from './components/forgotPassword';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <AuthProvider>
  <Router>
    <NavBar/>
    <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/login" exact component={() => <LoginForm />} />
        <Route path="/signup" exact component={() => <SignUpForm />} />
        <Route path="/forgot-password" exact component={() => <ForgotPasswordForm />} />
    </Switch>
    <Footer/>
  </Router>
  </AuthProvider>,
  document.getElementById('root')
);
