import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import baner1 from './Assets/Img/baner1.png'
import baner2 from './Assets/Img/baner2.png'

function Carrousel(){
    return(
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={baner1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={baner2}
            alt="Second slide"
            />  
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={baner1}
            alt="Third slide"
            />
        </Carousel.Item>
    
    </Carousel>
)
}

export default Carrousel; 