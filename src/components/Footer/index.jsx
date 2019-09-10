import React from 'react'
import { Wrapper, SubWrapper, SubWrapperAlt, Title, Text } from './styles'
// import { Logo } from '../Picture'

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
        <SubWrapper />
        {/* <SubWrapper >

        </SubWrapper> */}
      </SubWrapperAlt>

    </Wrapper>
  )
}

export default index
