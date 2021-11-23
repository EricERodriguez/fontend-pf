import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import Controles from "./ImgJuegos/Controles.png"
import DungeonKeyLogo from "./ImgJuegos/DungeonKeyLogo.png"
import DugneonKeyAssets from "./ImgJuegos/DugneonKeyAssets.png"

export default function DugneonKey() {
  return (
    <Fragment>
      {/* Logo */}
      <img src={DungeonKeyLogo} width="40%" className="rounded mx-auto d-block" />
      <br />
      {/* Juego */}
      <iframe src="https://dungeonkey.netlify.app/" width="100%" height="560px"></iframe>
      {/* Controles */}
      <br />
      <h3>Controles:</h3>
      <img src={Controles} width="10%" />
      <p>Usá los direcciones de tu teclado para mover al personaje</p>
      <br />
      {/* Info y Assets del juego */}
      <Container fluid>
        <Row>
          <Col>
            <h3>DungeonKey</h3>
            <p>DungeonKey o La LLave del Calabozo es un juego clasico de mazmorra donde tenés que evitar cualquier contanto con tus enemigos, ya que eso te llevaria a empezar de nuevo el nivel, encontra la llave y llega hasta la puerta final!</p>
          </Col>
          <Col>
            <h3>Contenido del Juego:</h3>
            <p>Acá podés encontrar los assets que se usaron para este juego, los cuales tienen un estilo Pixel Art.</p>
            <img src={DugneonKeyAssets} width="45%" />
            <br/>
            <br/>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1164279847&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </Col>
        </Row>
      </Container>
    </Fragment>


  )
}
