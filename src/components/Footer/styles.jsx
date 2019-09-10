import styled from 'styled-components'
import background from '../../assets/images/black-background.jpg'

export const Wrapper = styled.div`
// background: ${props => props.theme.white};
height: ${props => props.height ? props.height : '50vh'};
width: 100%;
content: "";
background: url(${background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: scroll;
`
export const SubWrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction:${props => props.SubWrapperDirection ? props.SubWrapperDirection : 'row'};
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center' };
align-items:center;
padding:${props => props.padding ? props.padding : '64px 0 '};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:0 auto;
`
export const SubWrapperAlt = styled(SubWrapper)`
flex-direction:${props => props.SubWrapperAltDirection ? props.SubWrapperAltDirection : 'column'};
align-items: center;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center' };
padding:${props => props.padding ? props.padding : '64px 0 '};
`

export const Title = styled.p`
font-size: 32px;
color: ${props => props.theme.white};
line-height: 1;
margin: 30px 0 0;
text-transform: uppercase;
font-weight:700;
`

export const Text = styled.p`
font-size: 12px;
color: ${props => props.theme.white};
line-height: 1;
margin: 30px 0 60px;
text-transform: capitalize;
font-weight: 300;
`