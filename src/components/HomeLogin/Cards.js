import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import baner0 from '../../Assets/img/baner0.png'
import baner1 from '../../Assets/img/baner1.png'
import baner2 from '../../Assets/img/baner2.png'
import baner3 from '../../Assets/img/baner3.png'
import baner4 from '../../Assets/img/baner4.png'
import baner5 from '../../Assets/img/baner5.png'
import NeoMartin from '../Juegos/DungeonKey';
import neomartinicon from "../../Assets/img/neomartinicon.png"
import DugneonKeyicon from "../../Assets/img/DugneonKeyicon.png"
import Breakouticon from "../../Assets/img/Breakouticon.png"
import pacmanicon from "../../Assets/img/pacmanicon.png"
import DugneonPixelicon from "../../Assets/img/DugneonPixelicon.png"
import TatetiIcon from "../../Assets/img/TatetiIcon.png"


function Cards() {

  return (
    <Container>
      <Row>
        {/* Neo Martin  */}
        <Col lg>
          <Card fluid style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner1} />
            <img className="cardicon" src={neomartinicon} />
            <Card.Body>
              <Card.Title className="titlegame">Neo Martin</Card.Title>
              <Card.Text>
                Martín se adentra a una nueva aventura, ayudalo a juntar la mayor cantidad de monedas posible sin que te toquen las espinas!
              </Card.Text>
              <Link to="/NeoMartin">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
        {/* DugeonKey */}
        <Col lg={{ order: 6 }}>
          <Card style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner0} />
            <img className="cardicon" src={DugneonKeyicon} />
            <Card.Body>
              <Card.Title className="titlegame" >DungeonKey</Card.Title>
              <Card.Text>
                DungeonKey o La LLave del Calabozo es un juego clasico de mazmorra donde tenés que evitar cualquier contanto con tus enemigos...
              </Card.Text>
              <Link to="/DungeonKey">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Breackout */}
        <Col lg>
          <Card style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner4} />
            <img className="cardicon" src={Breakouticon} />
            <Card.Body>
              <Card.Title className="titlegame" >BreakOut Delfi Version</Card.Title>
              <Card.Text>
                Destruí la mayor cantidad de bloques que puedas sin perder todas tus vidas y llegá hasta el maximo puntaje!
              </Card.Text>
              <br />
              <Link to="/BreakOut">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Columna Dos */}
      <Row>
        {/* Pacman */}
        <Col lg>
          <Card style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner3} />
            <img className="cardicon" src={pacmanicon} />
            <Card.Body>
              <Card.Title className="titlegame" >Pacman</Card.Title>
              <Card.Text>
                Viví la experiencia de jugar a uno de los juegos mas conocidos que marco un antes y un despues en el mundo Gaming...
              </Card.Text>
              <Link to="/Pacman">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Dugeon Pixel */}
        <Col lg>
          <Card style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner2} />
            <img className="cardicon" src={DugneonPixelicon} />
            <Card.Body>
              <Card.Title className="titlegame" >Pixel Dungeon</Card.Title>
              <Card.Text>
                Ganá experiencia a medida que derrotes a tus enemigos y descubri todos los cofres. Prepara bien antes del Final Boss...
              </Card.Text>
              <Link to="/PixelDungeon">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Tetris */}
        <Col lg>
          <Card style={{ width: '100%' }}>
            <Card.Img className="cardbg" variant="top" src={baner5} />
            <img className="cardicon" src={TatetiIcon} />
            <Card.Body>
              <Card.Title className="titlegame" >Ta-Te-Ti</Card.Title>
              <Card.Text>
                Probá la nueva version del famoso juego Ta-Te-Ti. Competí con tus amigos a ver quien gana mas rondas.
              </Card.Text>
              <Link to="/TaTeTi">Jugar</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Cards;