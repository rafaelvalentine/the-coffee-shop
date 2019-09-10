import styled from 'styled-components'

export const Wrapper = styled.div`
background: ${props => props.theme.paleYellow};
height: ${props => props.height ? props.height : '50vh'};
width: 100%;
`
export const SubWrapper = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center' };
align-items:center;
padding:${props => props.padding ? props.padding : '64px 0 '};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:0 auto;
`
export const SubWrapperAlt = styled(SubWrapper)`
flex-direction:column;
align-items: center;
padding:${props => props.padding ? props.padding : '64px 0 '};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
`
export const ProductCard = styled.div`
width: 250px;
// height:250px;
background: ${props => props.theme.transparent};
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
text-align: center;
padding:0 60px;
margin: 0 30px;
border:2px solid ${props => props.theme.transparent};
border-radius: 20px;
`
export const Title = styled.p`
font-size: 14px;
color: ${props => props.theme.title};
line-height: 1;
margin: 30px 0 0;
text-transform: uppercase;
font-weight:300;
`

export const Text = styled.p`
font-size: 18px;
color: ${props => props.theme.title};
line-height: 1;
margin: 30px 0 0;
text-transform: capitalize;
font-weight: 700;
`