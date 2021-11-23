import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ojoserror404 from './ojoserror404.png'

class Error404 extends Component{
  render(){
    return(
      <div className="display-2 text-center">
        <img src={ojoserror404} class="imgOjos" />
        <p class="mb-0">Error 404</p>
        <small class="text-muted">¿se perdió? ¿Cómo? ¿Por qué?  ahhhhhhhhh...!!!</small>
        <Link to="/"><button type="button" class="btn btn-dark" href="/">Llevame al home</button></Link>
      </div>
    )
  }
}

export default Error404;