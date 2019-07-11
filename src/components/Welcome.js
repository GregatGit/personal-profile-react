import React, { Fragment } from 'react'
import {
  CssBaseline,
  Typography,
  Container,
  Divider,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import { content } from '../data/data'
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 3,
  },
}))
const Welcome = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: 50 }}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Hello!</h1>
            {content.map((para, index) => (
              <Typography key={index} paragraph>
                {para}
              </Typography>
            ))}

            <List >
              <ListItem style={{textAlign: 'center'}}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                Click on the phone icon on the top right nav-bar if you need my contact details
                </ListItemText>
              </ListItem>
            </List>
            <Divider variant="middle" />
          </div>
        </Typography>
      </Container>
    </Fragment>
  )
}

export default Welcome
