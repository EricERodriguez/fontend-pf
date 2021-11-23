import React, { Fragment } from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import ControlesBreakout from './ImgJuegos/ControlesBreakout.png'
import BreakoutAssets from './ImgJuegos/BreakoutAssets.png'

export default function BreakOut() {
    return (
        <Fragment>
            <iframe src="https://breakoutrolling.netlify.app/" width="100%" height="660px"></iframe>
            {/* Controles */}
            <h3>Controles:</h3>
            <img src={ControlesBreakout} width="18%" />
            <p>En este juego vas a utilizar tu Mouse para darle la direccion a la paleta. Movelo de Izquierda a Derecha para darle la direccion que querés.</p>
            <br />
            {/* Info y Assets del juego */}
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Breakout</h3>
                        <p>Breakout es un videojuego arcade desarrollado por Atari, Inc. y lanzado al mercado el 13 de mayo de 1976.​ Fue creado por Nolan Bushnell y Steve Bristow, influenciados por el videojuego de 1972 Pong, también de Atari.</p>
                    </Col>
                    <Col>
                        <h3>Assets del Juego</h3>
                        <p>Te dejamos uno de los Assets más usados para este juego.</p>
                        <img src={BreakoutAssets} width="45%" />
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
}
