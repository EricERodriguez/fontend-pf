import React, { Component } from 'react';
import axios from "axios";
import { CenteredText } from '../Home/componentesT/CenteredText';

class Login extends Component{

  state = {
    email: "",
    password: "",
    error: ""
  }

  login = async (e) => {
    e.preventDefault();
    
    const user = {...this.state};
    delete user.error;

    const res = await axios.post("http://localhost:4000/api/login", user);
    
    if(typeof res.data == "string"){
      this.setState({error: res.data});
    }else{
      window.location="/"
      delete res.data.password
      this.props.auth(res.data);
    }

  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      
      <div className="card card-body border-success">
        <h3 className="card-title">Iniciar Sesion</h3>
        <form onSubmit={this.login}>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onInputChange}/>
          </div>
          <hr/>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.onInputChange}/>
          </div>
          <hr/>
          <button className="btn btn-primary">Iniciar</button>
        </form>
        <CenteredText/>
        {
          this.state.error.length > 0 ? (
            <div className="alert alert-danger mt-3">
              {this.state.error}
            </div>
          ) : ""
        }
      </div>
    )
  }

}

export default Login;