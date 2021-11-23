import React, { Fragment } from "react";
import PacmanLogo from "./ImgJuegos/PacmanLogo.png"
import ControlesPacman from "./ImgJuegos/ControlesPacman.png"
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import PacmanAssets from "./ImgJuegos/PacmanAssets.png"

export default function Pacman() {
    return (
        <Fragment>
            {/* Logo */}
            <img src={PacmanLogo} width="40%" className="rounded mx-auto d-block" />
            <br />
            {/* Juego */}
            <iframe src="https://pacmanrolling.netlify.app/" width="100%" height="500px"></iframe>
            {/* Controles */}
            <h3>Controles:</h3>
            <img src={ControlesPacman} width="18%" />
            <p>Presiona la Tecla N para iniciar el Juego Usá los direcciones de tu teclado para mover a Pacman. Si queres dejar en Mute el sonido presiona la tecla S</p>
            <br />
            {/* Info y Assets del juego */}
            <Container fluid>
        <Row>
          <Col>
            <h3>Pacman</h3>
            <p>Viví la experiencia de jugar a uno de los juegos mas conocidos que marco un antes y un despues en el mundo Gaming. Pac-Man es una franquicia de videojuegos japonesa publicada, desarrollada y propiedad de Bandai Namco Entertainment</p>
          </Col>
          <Col>
            <h3>Assets del Juego</h3>
            <p>Acá vas a encontrar los assets que se utilizan en el juego, desde los fantasmas hasta Pacman.</p>
            <img src={PacmanAssets} width="50%" />
          </Col>
        </Row>
      </Container>
        </Fragment>
    )
}
