import React from 'react'
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core'
import { about, aboutPics } from '../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(10),
  },
  img: {
    maxHeight: 200,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
    border: '1px solid #ddd',
  },
}))

export default function About() {
  const classes = useStyles()
  const displayAbout = arr => {
    return arr.map((ele, index) => (
      <Typography key={index} component="p" gutterBottom>
        {ele}
      </Typography>
    ))
  }
  return (
    <div>
      <Paper className={classes.root}>
        <Typography style={{ textAlign: 'center' }} variant="h4" component="h3">
          A little about me...
        </Typography>
        {displayAbout(about)}
        <img
          className={classes.img}
          src={aboutPics.sunny}
          alt="sunny at beach"
        />
      </Paper>
    </div>
  )
}
