import React from 'react'
import { ImageWrapper, SubDiv } from './styles'

const DetailParts = ({ ...props }) => {
  return (
    <ImageWrapper {...props}>
      <SubDiv  {...props}/>
    </ImageWrapper>
  )
}

export default DetailParts
