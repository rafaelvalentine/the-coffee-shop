import React from 'react'
import * as ButtonStyle from './styles'
import { Logo } from '../Picture'

const Button = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.Container disabled={loading} onClick={clicked} {...props}>
      <Logo width='24px' height='24px' margin='0 10px' src={require('../../assets/images/send.svg')} /> {content}
    </ButtonStyle.Container>
  )
}

export default Button
