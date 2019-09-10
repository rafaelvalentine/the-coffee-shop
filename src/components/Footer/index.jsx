import React from 'react'
import { Wrapper, SubWrapper, SubWrapperAlt, Title, Text } from './styles'
import { MainUnderline } from '../Input'

const index = ({ Gallery, ...props }) => {
  return (
    <Wrapper
      height='60vh'>
      <SubWrapperAlt
        flexWrap='nowrap'
        justifyContent='center'
      >
        <Title>
          Would you like to here from us?
        </Title>
        <Text>
          submit your email addrees for our newletter
        </Text>
        <MainUnderline placeholder='yourname@email.com' />
        <SubWrapper />

      </SubWrapperAlt>
      <SubWrapper
        padding='0'
        justifyContent='space-around'
        style={{ background: '#444', height:'40px' }} >
        <Text style={{ fontSize: '10px', margin:'0' }} >
          Would you like to here from us?
        </Text>
        <Text style={{ fontSize: '10px', margin:'0' }}>
          submit your email addrees for our newletter
        </Text>
      </SubWrapper>
    </Wrapper>
  )
}

export default index
