import React, { Fragment } from 'react'
import {
  CssBaseline,
  Typography,
  Container,
  Divider,
  makeStyles,
} from '@material-ui/core'

import { content } from '../data/data'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 3,
  },
  container: {
    paddingTop: 50,
    textAlign: 'center',
  },
  listItem: {
    textAlign: 'center',
  },
}))
const Welcome = () => {
  const classes = useStyles()
  let text = content.map((para, index) => (
    <Typography key={index} paragraph>
      {para}
    </Typography>
  ))
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="div">
          <div>
            <h1>Hello!</h1>
            {text}
            <Divider variant="middle" />
          </div>
        </Typography>
      </Container>
    </Fragment>
  )
}

export default Welcome
