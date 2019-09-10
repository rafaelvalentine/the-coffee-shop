import React from 'react'
import { Wrapper, GalleryCard, SubWrapper, SubWrapperAlt, Title, Text } from './styles'
import { Logo } from '../Picture'

const index = ({ Gallery, ...props }) => {
  const gallery = Gallery.map(gallery => (
    <GalleryCard key={Math.random()}>
      <Logo style={{ alignSelf: 'flex-start' }} width='100%' height='100%' margin='0' src={gallery.image} />
    </GalleryCard>
  ))
  return (
    <Wrapper
      height='90vh'>
      <SubWrapperAlt
        flexWrap='nowrap'
      >
        <Title>
          #thecoffeeshop
        </Title>
        <Text>
          coffee perfection since 1889
        </Text>
        <SubWrapper justifyContent='flex-start'>
          {gallery}
        </SubWrapper>
      </SubWrapperAlt>

    </Wrapper>
  )
}

export default index