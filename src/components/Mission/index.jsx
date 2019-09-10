import React from 'react'
import { Wrapper, MissionCard, SubWrapper, Text } from './styles'
import { Logo } from '../Picture'

const index = ({ Missions, ...props }) => {
  const missions = Missions.map(mission => (
    <MissionCard key={Math.random()}>
      <Logo style={{ alignSelf: 'flex-start' }} width='40px' height='40px' src={mission.image} />
      <Text>
        {mission.text}
      </Text>
    </MissionCard>
  ))
  return (
    <Wrapper>
      <SubWrapper justifyContent='space-around'>
        {missions}
      </SubWrapper>

    </Wrapper>
  )
}

export default index
