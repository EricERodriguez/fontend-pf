import React, { Fragment } from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import ControlesNeoMartin from "./ImgJuegos/ControlesNeoMartin.png"
import PixelDugneonAssets from "./ImgJuegos/PixelDugneonAssets.png"
import PixelDugneonPaleta from "./ImgJuegos/PixelDugneonPaleta.png"
import avisomodal from "./ImgJuegos/avisomodal.png"


export default function PixelDungeon() {
    return (
        <Fragment>
            {/* Aviso no responsivo */}
            <img id="alerta" src={avisomodal} width="100%" />
            <iframe src="https://pixeldungeon.netlify.app/" width="100%" height="500px"></iframe>
            <h3>Controles:</h3>
            <img src={ControlesNeoMartin} width="280px" />
            <p>Usá las teclas de las flechas para dar direcciona tu personaje, podes ampliar la vista del mapa haciendo click en "Mostrar/Esconder Mapa" y si queres empezar de nuevo dale a "Nueva Partida"</p>
            <br />
            {/* Info y Assets del juego */}
            <Container fluid>
                <Row>
                    <Col lg>
                        <h3>Pixel Dugneon</h3>
                        <p>El objetivo de este juego es claro! Matá a todos los enemigos y convertite en el mas fuerte antes de cruzar la puerta para enfretar el Final Boss.Consejo: No olvides buscar los cofres, te serán de mucha ayuda!</p>
                    </Col>
                    <Col>
                        <h3>Contenido del Juego:</h3>
                        <p>Para este juego y como su nombre lo indica se ultizo el estilo Pixel Art y una paleta de color al estilo de Game Boy.</p>
                        <img src={PixelDugneonAssets} width="50%" />
                        <br />
                        <br />
                        <img src={PixelDugneonPaleta} width="50%" />
                        <br />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
