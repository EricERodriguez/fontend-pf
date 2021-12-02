import React, { Fragment } from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import ControlesNeoMartin from "./ImgJuegos/ControlesNeoMartin.png"
import NeoMartinAsset01 from "./ImgJuegos/NeoMartinAssets01.png"
import NeoMartinAsset02 from "./ImgJuegos/NeoMartinAssets02.png"
import avisomodal from "./ImgJuegos/avisomodal.png"

export default function NeoMartin() {
    return (
        <Fragment>
            {/* Aviso no responsivo */}
            <img id="alerta" src={avisomodal} width="100%" />
            {/* Juego */}
            <iframe width="100%" height="500px" src="//v6p9d9t4.ssl.hwcdn.net/html/4802772/index.html" msallowfullscreen="true" scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" id="game_drop" allowtransparency="true"></iframe>
            {/* Controles */}
            <br />
            <h3>Controles:</h3>
            <img src={ControlesNeoMartin} width="280px" />
            <p>Usa las teclas izquiera y derecha del teclado para mover a ambos lados al Personaje y hacé click en la pantalla para empezar la aventura!</p>
            <br />
            {/* Info y Assets del juego */}
            <Container fluid>
                <Row>
                    <Col lg>
                        <h3>Neo Martín</h3>
                        <p>Una nueva aventura comienza para Martín donde tendrá que obtener el mayor puntaje posible. Ayudá a Martín a recolectar las modenas sin perder sus vidas!</p>
                    </Col>
                    <Col>
                        <h3>Contenido del Juego:</h3>
                        <p>Este juego realizado con un estilo pixel art y una paleta de colores bastante amplia. Te dejamos sus assets y su SoundTrack.</p>
                        <img src={NeoMartinAsset01} width="50%" />
                        <br/>
                        <br/>
                        <img src={NeoMartinAsset02} width="40%" />
                        <br/>
                        <br/>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1164276694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}
