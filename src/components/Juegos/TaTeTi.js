import React, { Fragment } from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import ControlesBreakout from './ImgJuegos/ControlesBreakout.png'
import avisomodal from "./ImgJuegos/avisomodal.png"


export default function TaTeTi() {
    return (
        <Fragment>
            {/* Aviso no responsivo */}
            <img id="alerta" src={avisomodal} width="100%" />
            <iframe src="https://react-tateti.netlify.app/" width="100%" height="500px"></iframe>
            {/* Controles */}
            <br />
            <h3>Controles:</h3>
            <img src={ ControlesBreakout } width="150px" />
            <p>Usá el Mouse para clickear en cada casilla donde quieras poner tu marca, recorda que cada jugador puede una sola vez por turno. Cuando quieras comenzar de nuevo solo debes presionar el boton "Start".</p>
            <br />
            {/* Info y Assets del juego */}
            <Container fluid>
                <Row>
                    <Col lg>
                        <h3>Ta-Te-Ti</h3>
                        <p>La nueva version de este juego clasico que todo el mundo lo jugo en algun momento de su vida, esta version fue realizada con React Js</p>
                    </Col>
                    <Col>
                        <h3>Contenido del Juego:</h3>
                        <p>Al estar realizado con react, los assets se crearon con CSS en el mismo codigo.</p>
                        <br />
                        <br />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
