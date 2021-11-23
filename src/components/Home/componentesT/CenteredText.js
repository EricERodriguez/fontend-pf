import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: "4vw 12vw",
    width: "auto",
    border:"15px",
    marginTop:"15px",
    align: "center",
    objectPosition: "center"
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));


export function CenteredText() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs >
        <Typography variant="body1" align="center" gutterBottom="true" >
        Lo que quieras jugar a tu alcance y al menor costo, o incluso sin ninguno.
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" align="center" gutterBottom="true">
          <b>Somos Retro-Games, y ponemos a tu disposicion el mejor sitio de juegos de manera online.</b>
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" align="center" gutterBottom="true">
        Estamos constantemente actualizando nuestro amplio catalogo para que cada ves puedas elegir los mejores titulos.
        </Typography>
      </Grid>
    </Grid>
  );
}