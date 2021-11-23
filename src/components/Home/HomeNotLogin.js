import React from 'react';


import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { primaryColorPalette, secondaryColorPalette , tercerColorPalette} from './componentesT/color-palette';
import {TextWithImage } from './componentesT/TextWithImage';
import { CenteredText } from './componentesT/CenteredText';


const myContent = [
  {
    title: 'Accede a los juegos al instante',
    subTitle: 'Con mucha variedad de juegos retro publicados!',
    descriptions: [
      'Desde grandes compañías hasta estudios independientes pasando por todo lo intermedio.', 
      'Disfruta de ofertas exclusivas, actualizaciones automáticas y otras grandes ventajas.'
    ],
    finishingText: 'Get to know more details and book your appointment now :)',
    img: 'https://media.nintendo.com/newsupermariobrosu/assets/img/characters/hero-char.png',
  },
  {
    title: 'Únete a la comunidad',
    subTitle: 'Consigue nuevos amigos!',
    descriptions: [
      'Conoce nuevas personas, únete a grupos, forma clanes, chatea mientras juegas y mucho más!',
      'Con muchos juagdores que pueden ser posibles amigos (o enemigos), la diversión nunca termina.'
    ],
    finishingText: 'Get to know more details and book your appointment now :)',
    img:'https://i.pinimg.com/originals/14/85/0a/14850af8d2b47e765dfa16c44bfc02bd.png',
  },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColorPalette[500],
    },
    secondary: {
      main: secondaryColorPalette[500],
    },
    tercer: {
      main: tercerColorPalette[500],
    },
    primario2: {
      main: primaryColorPalette[400],
    },
  },
});

function HomeNotLogin() {
  return (
    <ThemeProvider theme={theme}>
      <CenteredText />
      {myContent.map((item, index) => (
        <TextWithImage textToTheRight={index % 2 === 0} content={item} />
      ))}
    </ThemeProvider>
  );
}

export default HomeNotLogin;