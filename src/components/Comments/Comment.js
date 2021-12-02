import React, { Component } from 'react'
import {format} from "timeago.js";
import axios from "axios";
import {Modal, Button} from "react-bootstrap";





class Comment extends Component {

  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}


  state = {
    public_id: "",
    content: "",
    author: this.props.author,
  }

  deleteComment = async () => {
    await axios.delete("http://localhost:4000/api/comments/"+this.props.id);

    this.props.getComments();
  }

  updateComment = async () => {
    await axios.put("http://localhost:4000/api/comments/"+this.props.id, this.state);


    this.setState({content: ""})

    this.props.getComments();
    this.handleClose()

  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {

    const { author, content, date } = this.props;

    return (
      <div className="card bg-light mb-2">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <strong className="font-weight-bold">{author}</strong>
            { author === this.props.user ||"admin" === this.props.user ? (
              <section>
                <Button type="button" onClick={this.deleteComment} className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </Button>
                <Button type="button"onClick={this.handleShow}  className="close" aria-label="Edit">
                  <span aria-hidden="true">&#9998;</span>
                </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar comentario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form onSubmit={this.updateComment} >
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Escribe un Comentario" name="content" onChange={this.onInputChange} value={this.state.content} />
                    </div>
                  </form>
              </Modal.Body>
					    <Modal.Footer>
						  <Button variant="secondary" onClick={this.handleClose}>
							Close
              </Button>
						  <Button variant="primary" onClick={this.updateComment}>
							Save Changes
              </Button>
              </Modal.Footer>
            </Modal>
              </section>
            ): ""}

          </div>
          <div className="d-flex justify-content-between">
            <span>{content}</span>
            <span>{format(date)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;