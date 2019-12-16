import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./auth/Login";
import GenreIndex from "./genres/GenreIndex";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";
import Register from "./auth/Register";
import SideBar from './SideBar';
import MusicPlayer from "./player/MusicPlayer";
import Search from './Search';


const App = () => {
  return (
    <div className='full-app'>
      <AuthRoute path='/' component={SideBar} routeType='protected' />
      <Nav />
      <br />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <AuthRoute exact path='/search' component={Search} routeType='protected' />
        <Route exact path="/" component={GenreIndex} />

      </Switch>
      
      <AuthRoute path="/" component={MusicPlayer} routeType="protected" />
    </div>
  );
};

export default App;
