import React, { Component } from 'react'
import axios from "axios"

class CreatePublication extends Component {

  state = {
    title: "",
    content: "",
    author : this.props.author
  }

  createPublication = async e => {
    e.preventDefault();

    await axios.post("https://rolling-games-node.herokuapp.com/api/publications/", this.state);

    this.props.getPublications();

    this.setState({
      title: "",
      img: "",
      content: "",
    })

  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="card card-body mb-4 border-info">
        <form onSubmit={this.createPublication}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Titulo" value={this.state.title} onChange={this.onChangeInput} name="title"/>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Insertar URL de imagen" value={this.state.img} onChange={this.onChangeInput} name="img" ></input>
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Contenido" value={this.state.content} onChange={this.onChangeInput} name="content" ></textarea>
          </div>
          <button className="btn btn-primary">Crear</button>
        </form>
      </div>
    )
  }
}

export default CreatePublication;