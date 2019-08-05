import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import {skillsList} from '../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    marginBottom: '15px'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function SkillListA() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      {skillsList.map(skill => {
        let icon

        return (
          <Chip
            key={skill}
            icon={icon}
            label={skill}
            className={classes.chip}
          />
        )
      })}
    </Paper>
  )
}
