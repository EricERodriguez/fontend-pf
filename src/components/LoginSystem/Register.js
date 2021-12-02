import React, { Component } from 'react';
import axios from "axios";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"
import { CenteredText } from '../Home/componentesT/CenteredText';
registerLocale("es", es)
class Register extends Component{

  state = {
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    date: "",
    error: ""
  }

  onInputChange = e => {
    
    this.setState({
      [e.target.name] : e.target.value
    });console.log(this.state.password)
    console.log(this.state.confirm_password)
  }

  createAccount = async (e) => {
    e.preventDefault();
    let error;

    const user = {...this.state};
    delete user.error;

    const res = await axios.post("http://localhost:4000/api/register",user);

    if (this.state.password === this.state.confirm_password) {
      if (res.data.message === "User Created") {
        error = "Usuario creado con exito"
      }else{
        error = "Verifique los datos ingresados"
        if (res.data.message !== undefined) {
          error = res.data.message;
          if (error === "User validation failed: date: Path `date` is required.") {
            error = "Indique una fecha de nacimiento valida"
          }else if (error === "User validation failed: fullName: Path `fullName` is required."){
            error = "Indique una nombre completo valido"
          } else if (error === "User validation failed: username: Path `username` is required."){
            error = "Indique una nombre de usuario valido"
          } else {
            error = "Verifique los datos ingresados"
          }
        } else {
          error = "Verificar los datos ingresados"
        }
      }
    } else {
      error = "Las contraseñas no coinciden"
    }

    this.setState({
      error
    });
  }

  handleChange = (date) => {
    this.setState({date});
  }


  render(){
    return (
      <div className="card card-body border-dark">
        <h3 className="card-title">Registro</h3>
        <form onSubmit={this.createAccount}>
          <div className="form-group  row p-3">
            <input type="text" className="form-control" name="username" placeholder="Nombre de Usuario" onChange={this.onInputChange} value={this.state.username}/>
          </div>
          <div className="form-group  row p-3">
            <input type="text" className="form-control" name="fullName" placeholder="Nombre Completo" onChange={this.onInputChange} value={this.state.fullName}/>
          </div>
          <div className="form-group  row p-3">
            <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
          </div>

          <div className="form-group row p-3">
            <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={this.onInputChange} value={this.state.password} />
          </div>
          <div className="form-group row p-3">
            <input type="password" className="form-control" name="confirm_password" placeholder="Vuelva a escribir la contraseña" onChange={this.onInputChange} value={this.state.confirm_password}/>
          </div>
          <div className="form-group row p-3">
            <DatePicker selected={this.state.date} onChange={this.handleChange} className="form-control btn-block col-md" placeholderText="Fecha de Nacimiento" locale="es" dateFormat="dd/MM/yyyy" peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"/>
            <hr/>
            <button className="btn btn-success mt-sm-3 mt-md-3 ml-lg-3 mt-lg-0 col-md registroFont">Registrarse</button>
          </div>
        </form>
        {
          this.state.error === "Usuario creado con exito" ? (
            <div className="alert alert-success">
              {this.state.error}
            </div>
          ): (
            <div className="alert alert-danger">
              {this.state.error}
            </div>
          )
        }<CenteredText  />
      </div>
    )
  }

}

export default Register;


