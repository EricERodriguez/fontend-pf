import React, { Component } from 'react'
import axios from "axios";
import { format } from "timeago.js";
import ListComments from "../Comments/ListComments";
import CreateComment from "../Comments/CreateComment";



class Publication extends Component {

  state = {
    title: "",
    img: "",
    content: "",
    author: "",
    date: "",
    cantidad: 0,
    comments: []
  }

  componentDidMount(){

    this.getPublication()
    this.getComments();

  }

  getPublication = async () => {

    const res = await axios.get("https://rolling-games-node.herokuapp.com/api/publications/"+ this.props.match.params.id);

    const { title, img, content, author, createdAt: date } = res.data;

    this.setState({
      title,
      img,
      content,
      author,
      date,
    })
  }

  getComments = async () => {
    const res = await axios.get("https://rolling-games-node.herokuapp.com/api/comments/"+ this.props.match.params.id);


    this.setState({
      comments: res.data.comments,
      cantidad: res.data.cantidad
    })

  }

  deletePublication = async () => {
    await axios.delete("https://rolling-games-node.herokuapp.com/api/publications/"+ this.props.match.params.id);
    const comments = await axios.get("https://rolling-games-node.herokuapp.com/api/comments/" + this.props.match.params.id);
    comments.data.comments.forEach( async (comment) => {
      await axios.delete("https://rolling-games-node.herokuapp.com/api/comments/"+comment._id);
    })
    this.props.history.push("/")
  }

  render() {

    const { title, img, content, author, date, comments } = this.state;
  
    return (
      <div>
        <div className="card ">
          <div className="card-header bg-black d-flex justify-content-between">
            <h3 className="card-title bg-black">{title}</h3>
            {
              author === this.props.acc.username ? 
              (
                <section>
                  <button type="button" onClick={this.deletePublication} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>  
                  </button>
                  <button type="button" className="close" aria-label="Edit">
                    <span aria-hidden="true">&#9998;</span>  
                  </button>
                </section>
              ) : ""
            }
          </div>
          <div className="card-body">
          {img === "Sin imagen" ? <div className="card-body"> <p>{img}</p> </div>: <div className="card-body"><img src={img} alt="Imagen del juego" className="responsive-image"  /></div>}
          </div>
          <div className="card-body">
            <p className="card-text">{content}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span>{author}</span>
            <span>{format(date)}</span>
          </div>
        </div>


        {
          comments.length > 0 ? (
          <ListComments 
            comments={this.state.comments}
            getComments={this.getComments}
            author={this.props.acc.username}
            cantidad={this.state.cantidad}
          />)
          : <p className="mt-2">No hay Comentarios</p>
        }

        <CreateComment 
          public_id={this.props.match.params.id}
          getComments={this.getComments}
          author={this.props.acc.username}
        />


      </div>
    )
  }
}

export default Publication;