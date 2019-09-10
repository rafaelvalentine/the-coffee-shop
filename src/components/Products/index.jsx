import React from 'react'
import { Wrapper, ProductCard, SubWrapper, SubWrapperAlt, Title as TitleText, Text } from './styles'
import { Logo } from '../Picture'
import Info from '../Banner/BannerText'
import Button from '../Button'
import { formatAmount } from '../Tools/Formatter'

const index = ({ Products, ...props }) => {
  const products = Products.map(product => (
    <ProductCard key={Math.random()}>
      <Logo style={{ alignSelf: 'flex-start' }} width='100px' height='100px' src={product.image} />
      <TitleText>
        {product.quality}
      </TitleText>
      <Text>
        {product.name}
      </Text>
      <Button margin='30px 0 0' content={`$ ${formatAmount(product.amount)}`} />
    </ProductCard>
  ))
  return (
    <Wrapper
      height='90vh'>
      <SubWrapperAlt
        flexWrap='nowrap'
      >
        <Info
          title='BUY NOW'
          body='OUR BEST DEAL'
          foot={`Coffee company with a straightforward: to make an office and on-the-go cup of coffee that we'd like to drink ourselves`}
          textAlign='center'
          altText='true'
          hideButton />
        <SubWrapper justifyContent='center'>
          {products}
        </SubWrapper>
      </SubWrapperAlt>

    </Wrapper>
  )
}

export default index
