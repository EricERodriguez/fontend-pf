import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootswatch/dist/vapor/bootstrap.min.css";

import Home from "./components/Home";
import Publication from "./components/Publications/Publication";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/LoginSystem/Login";
import Register from "./components/LoginSystem/Register";
import Error404 from "./components/Errors/Error404";
import Profile from "./components/User/Profile";
import Admin from './components/Admin/Admin';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer/Footer';

import DungeonKey from './components/Juegos/DungeonKey';
import Pacman from './components/Juegos/Pacman';
import BreakOut from './components/Juegos/BreakOut';
import NeoMartin from './components/Juegos/NeoMartin';
import PixelDungeon from './components/Juegos/PixelDungeon';
import TaTeTi from './components/Juegos/TaTeTi';

function reload() {
  window.location.reload();
}

class App extends Component{

  state = {
    isAuth: false
  }

  auth = (account) => {
    this.setState({account, isAuth: true})
    localStorage.setItem("acc", this.state.account._id);
  }

  desAuth = () => {
    this.setState({account: {}, isAuth: false});
    localStorage.removeItem("acc");
    reload()
  }

  componentWillMount = async () => {
    const acc = localStorage.getItem("acc");
    if(acc){
      const res = await axios.get("http://localhost:4000/api/users/"+acc);
      this.setState({account: res.data, isAuth: true, roles: res.data.role});
    }
  }

  render(){
    return (
      <Router>
        <Navigation isAuth={this.state.isAuth} desAuth={this.desAuth}  acc={this.state.account} rol={this.state.roles} />

        {
          this.state.isAuth ? (
            <div className="container p-4">
              <Switch>
                <Route path="/" exact render={(props) => <Home {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} />}/>
                <Route path="/publication/:id" render={(props) => <Publication {...props} acc={this.state.account} />} />
                <Route path="/profile" render={(props) => <Profile {...props} acc={this.state.account} />} />
                {this.state.roles === "ADMIN"?
                <Route path="/admin" render={(props) => <Admin {...props} acc={this.state.account} rol={this.state.roles}/>} /> :
                <Route path="/" exact render={(props) => <Home {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} />}/>}
                <Route path="/publication" exact render={(props) => <Dashboard {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} />}/>
                <Route path="/NeoMartin" render={(props) => <NeoMartin {...props} acc={this.state.account} />} />
                <Route path="/DungeonKey" render={(props) => <DungeonKey {...props} acc={this.state.account} />} />
                <Route path="/Pacman" render={(props) => <Pacman {...props} acc={this.state.account} />} />
                <Route path="/BreakOut" render={(props) => <BreakOut {...props} acc={this.state.account} />} />
                <Route path="/PixelDungeon" render={(props) => <PixelDungeon {...props} acc={this.state.account} />} />
                <Route path="/TaTeTi" render={(props) => <TaTeTi {...props} acc={this.state.account} />} />
                <Route component={Error404} />
              </Switch>

          </div>
          ) : (
            <div className="container p-4">
              <Switch>
                <Route path="/login" render={(props) => <Login {...props} auth={this.auth} />}/>
                <Route path="/register" component={Register} />
                <Route render={(props) => <Home {...props} isAuth={this.state.isAuth} auth={this.auth} acc={this.state.account} /> }/>
              </Switch>
            </div>
          )
        }


        <Footer/>
      </Router>
    )
  }
}

export default App;
