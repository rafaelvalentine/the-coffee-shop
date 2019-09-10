import React from 'react'
import Button from '../Button'
import { Title, Text, TextWrapper } from './styles'

const BannerText = ({ title, body, foot, content, ...props }) => {
  return (
    <TextWrapper {...props}>
      <Text {...props}>
        {title}
      </Text>
      <Title {...props}>
        {body}
      </Title>
      <Text {...props}>
        {foot}.
      </Text>
      <div className='button-div'>
        {props.hideButton ? null : <Button
          primary
          content={content || 'Shop Now'}
          margin={props.buttonMargin}
        />}
      </div>
    </TextWrapper>
  )
}

export default BannerText
