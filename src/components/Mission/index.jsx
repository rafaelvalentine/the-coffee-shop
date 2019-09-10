import React, { useState } from 'react'
import { Wrapper, MissionCard, SubWrapper, Text } from './styles'
import { Logo } from '../Picture'

const Mission = ({ text, image, ...props }) => {

  const [animate, setAnimate] = useState({ show: false })
  let time = (props.index + 1 ) * 1000
  let card = null
  setTimeout(() => {
    setAnimate(animate => ({ show: true }))
  }, time)
  if (animate.show) {
    card = (
      <MissionCard>
        <Logo style={{ alignSelf: 'flex-start' }} width='40px' height='40px' src={image} />
        <Text>
          {text}
        </Text>
      </MissionCard>
    )
  }
  return card
}
const index = ({ Missions, ...props }) => {

  const missions = Missions.map((mission, index) => (
    <Mission key={Math.random()} {...mission} index={index} />
  ))


  // console.log(selectedUser);
  return (
    <Wrapper>
      <SubWrapper justifyContent='space-around'>
        {missions}
      </SubWrapper>
    </Wrapper>
  )
}

export default index
