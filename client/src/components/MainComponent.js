import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route , Redirect, withRouter } from 'react-router-dom';

import Home from './HomeComponent';

import PlayersContainer from '../containers/PlayersContainer';

import AdminHome from './AdminHome/AdminHome';
import AddPlayer from './AddPlayer/Addplayer';
import AddMatchContainer from './AddMatch/AddMatchContainer';

export default class Main extends Component{

  render(){
    return(
      <div>
        <div className="container">
          <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/addmatch' component={AddMatchContainer} />
            <Route exact path='/addplayers' component={AddPlayer} />
            <Route exact path='/editplayers' component={Home} />
            <Route exact path='/leaderboard' component={PlayersContainer} />
            <Route exact path="/adminpage" component={AdminHome} />
          </Switch>
          </div>
        </div>

      </div>
    );
  }
}
