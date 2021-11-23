import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.dark,
    color: `${theme.palette.primary.contrastText} !important `,
    padding: '4vw 12vw',
    marginTop:"1.5rem",
    width:"auto",
    border:"15px",
    objectPosition: "center"
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  title: {
    color: theme.palette.tercer.main,
  },
  subTitle: {
    color: theme.palette.secondary.light,
  },
}));

const Description = (props) => {
  return (
    <Grid item xs>
      <Typography variant="body1">{props.description}</Typography>
    </Grid>
  );
};

const TextToTheRight = (props) => {
  return (
    <div>
    <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
      <Grid item xs={4}>
        <img className={props.classes.img} src={props.content.img} alt="This is a test" />
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6" className={props.classes.title}>
              {props.content.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" className={props.classes.subTitle}>
              <b>{props.content.subTitle}</b>
            </Typography>
          </Grid>
          {props.content.descriptions.map((description) => (
            <Description description={description} />
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
};

const TextToTheLeft = (props) => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
      <Grid item xs={6}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6" className={props.classes.title}>
              {props.content.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" className={props.classes.subTitle}>
              <b>{props.content.subTitle}</b>
            </Typography>
          </Grid>
          {props.content.descriptions.map((description) => (
            <Description description={description} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img className={props.classes.img} src={props.content.img} alt="This is a test" />
      </Grid>
    </Grid>
  );
};

export function TextWithImage(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.textToTheRight ? (
        <TextToTheRight classes={classes} content={props.content} />
      ) : (
        <TextToTheLeft classes={classes} content={props.content} />
      )}
    </div>
  );
}

