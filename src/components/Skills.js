import React, { Fragment } from 'react'
import { Typography, Container, CssBaseline, Divider } from '@material-ui/core'
import SkillText from './SkillText'

const Skills = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container 
        maxWidth="md" 
        style={{ paddingTop: 50, paddingBottom: 35 }}
      >
        <Typography
          component="div"
          style={{ backgroundColor: '#fefefe', marginBottom: 10 }}
        >
          <SkillText />
          <Divider variant="middle" />
        </Typography>
      </Container>
    </Fragment>
  )
}

export default Skills
