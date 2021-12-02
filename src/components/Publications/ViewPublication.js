import React, { Component } from 'react'
import axios from "axios";
import { format } from "timeago.js";

class ViewPublication extends Component {

  deletePublication = async () => {
    await axios.delete("http://localhost:4000/api/publications/"+this.props.id);
    this.props.getPublications();
    this.props.history("/");
  }

  render() {

    const { title, img, content, author, date } = this.props;

    return (
      <div className="card  border-success mb-4">
        <div className="card-header bg-black d-flex justify-content-between mt-5">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-body">
          {img === "Sin imagen" ? <div className="card-body"> <p>{img}</p> </div>: <div className="card-body"><img src={img} alt="Imagen del juego" className="responsive-image"  /></div>}
        </div>
        <div className="card-body">
          <p>{content}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span>{author}</span>
          <span>{format(date)}</span>
        </div>
      </div>
    )
  }
}

export default ViewPublication;