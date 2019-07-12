import React from 'react'
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core'
import { about, aboutPics } from '../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(10),
  },
  img: {
    height: 200,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    border: '1px solid #021a40',
  },
}))

export default function About() {
  const classes = useStyles()
  const displayAbout = arr => {
    return arr.map((ele, index) => (
      <Typography key={index} component="p">
        {ele}
      </Typography>
    ))
  }
  return (
    <div>
      <Paper className={classes.root}>
        <Typography style={{textAlign: 'center'}} variant="h5" component="h3">
          A little about me...
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <img
            className={classes.img}
            src={aboutPics.gregProfile}
            alt="profile gregDuncan"
          />
          </Grid>
          <Grid item xs={8}>
            {displayAbout(about)}
          </Grid>
          <Grid item xs>
            <img
            className={classes.img}
            src={aboutPics.sunny}
            alt="sunny at beach"
          />
          </Grid>
        </Grid>
        
        
        
      </Paper>
    </div>
  )
}
