import React, { Component } from 'react'
import axios from "axios";
import { format } from "timeago.js";
import ListComments from "../Comments/ListComments";
import CreateComment from "../Comments/CreateComment";
import {Modal, Button} from "react-bootstrap";



class Publication extends Component {

  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		// this.state = {
		// 	show: false,
		// };

    console.log(this.props.acc.username)
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  state = {
    title: "",
    img: "",
    content: "",
    author: "",
    date: "",
    cantidad: 0,
    comments: [],
    show: false,
  }

  componentDidMount(){

    this.getPublication()
    this.getComments();

  }

  getPublication = async () => {

    const res = await axios.get("http://localhost:4000/api/publications/"+ this.props.match.params.id);

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
    const res = await axios.get("http://localhost:4000/api/comments/"+ this.props.match.params.id);


    this.setState({
      comments: res.data.comments,
      cantidad: res.data.cantidad
    })

  }

  deletePublication = async () => {
    await axios.delete("http://localhost:4000/api/publications/"+ this.props.match.params.id);
    const comments = await axios.get("http://localhost:4000/api/comments/" + this.props.match.params.id);
    comments.data.comments.forEach( async (comment) => {
      await axios.delete("http://localhost:4000/api/comments/"+comment._id);
    })
    this.props.history.push("/")
  }

  updatePublication  = async () => {
    await axios.put("http://localhost:4000/api/publications/"+this.props.match.params.id, this.state);


    this.setState({
      title: "",
      img: "",
      content: ""
    })

    this.getPublication();
    this.handleClose()

  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { title, img, content, author, date, comments } = this.state;
  
    return (
      <div>
        <div className="card ">
          <div className="card-header bg-black d-flex justify-content-between mt-5">
            <h3 className="card-title bg-black">{title}</h3>
            {
              author === this.props.acc.username ||"admin" === this.props.acc.username ?
              (
                <section>
                  <Button type="button" onClick={this.deletePublication} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>  
                  </Button>
                  <Button type="button" onClick={this.handleShow} className="close" aria-label="Edit">
                    <span aria-hidden="true">&#9998;</span>  
                  </Button>

                  <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar comentario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form onSubmit={this.updatePublication} >
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Escribe un Comentario" name="title" onChange={this.onInputChange} value={this.state.title} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Escribe un Comentario" name="img" onChange={this.onInputChange} value={this.state.img} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Escribe un Comentario" name="content" onChange={this.onInputChange} value={this.state.content} />
                    </div>
                  </form>
              </Modal.Body>
					    <Modal.Footer>
						  <Button variant="secondary" onClick={this.handleClose}>
							Close
              </Button>
						  <Button variant="primary" onClick={this.updatePublication}>
							Save Changes
              </Button>
              </Modal.Footer>
            </Modal>
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