import styled from 'styled-components'
import background from '../../assets/images/mission-hover.svg'

export const Wrapper = styled.div`
background: ${props => props.theme.background};
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
`

export const MissionCard = styled.div`
width: 250px;
height:250px;
background: ${props => props.theme.white};
display:flex;
justify-content:center;
align-items: flex-start;
flex-direction:column;
padding:0 60px;
border:2px solid ${props => props.theme.orange};
border-radius: 20px;
&:hover {
  border-radius: 0;
  border:1px solid ${props => props.theme.transparent};
  border-radius: 2px 50px 2px 2px;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
  background-attachment: scroll;
  background-color: ${props => props.theme.yellow};
}
`
export const Text = styled.p`
font-size: 18px;
color: ${props => props.theme.title};
line-height: 1;
margin: 60px 0 0;
text-transform: capitalize;
`
// export const 