import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  makeStyles,
  MobileStepper,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
  Tooltip,
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { projectData } from '../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: 10
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    border: '1px solid #021a40'
  },
  paper: {
    width: 'auto',
    padding: 15,
    marginRight: 20,
    marginBottom: 40
  }
}))

export default function StepperProjects() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = projectData.length

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Grid style={{marginTop: 55}} container spacing={3}>
      <Grid item xs={4}>
        <div className={classes.root}>
          <Paper square elevation={0} className={classes.header}>
            <Typography align="center">{projectData[activeStep].title}</Typography>
          </Paper>
          <img
            className={classes.img}
            src={projectData[activeStep].img}
            alt={projectData[activeStep].title}
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </Grid>
      <Grid  item xs={8}>
        <Paper className={classes.paper}>
          <Typography align="center" variant="h3">
            {projectData[activeStep].title}
          </Typography>
          <Typography variant="h6" elevation={3}>
            {projectData[activeStep].background}
          </Typography>
          <Divider variant="middle" style={{marginBottom: 5}}/>
          <Typography component="h5">
            STATUS: {projectData[activeStep].status}
          </Typography>
          <Divider variant="middle" style={{marginBottom: 5}}/>
          <Tooltip title="Will open project in new tab" placement="top">
            <Button color="primary" variant="outlined"
              onClick={() => window.open(projectData[activeStep].url, '_blank')}
            >
              Open Project
            </Button>
          </Tooltip>
          <Tooltip title="Will open code in new tab" placement="top">
            <Button color="primary" variant="outlined"
              style={{ float: 'right' }}
              onClick={() =>
                window.open(projectData[activeStep].code, '_blank')
              }
            >
              Open Code
            </Button>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  )
}
