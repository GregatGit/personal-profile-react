import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'

import { skillsList as list } from '../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function SKillsList() {
  const classes = useStyles()

  function MakeRow(a = 'x', b = 'y', c = 'z') {
    return (
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{a}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{b}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{c}</Paper>
        </Grid>
      </Grid>
    )
  }

  const TheList = () => {
    return (
      <Grid container spacing={1}>
        {MakeRow(list[0], list[1], list[2])}
        {MakeRow(list[3], list[4], list[5])}
        {MakeRow(list[6], list[7], list[8])}
        {MakeRow(list[9], list[10], list[11])}
        {MakeRow(list[12], list[13], list[14])}
        {MakeRow(list[15], list[16], list[17])}
      </Grid>
    )
  }

  return (
    <div className={classes.root}>
      <TheList />
    </div>
  )
}

export default SKillsList
