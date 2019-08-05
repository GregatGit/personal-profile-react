import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import { skillsTextA, skillsTextB } from '../data/data'
import SkillListA from './SkillListA'

const SkillText = () => {
  const renderPara = arr => {
    return arr.map((para, index) => {
      return <Typography key={index} paragraph>{para}</Typography>
    })
  }
  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>My Technology Stack</h2>
      {renderPara(skillsTextA)}
      <SkillListA />
      {renderPara(skillsTextB)}
    </Fragment>
  )
}

export default SkillText
