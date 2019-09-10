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
transition: 1s
transition-timing-function: ease-in-out;
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
transition: .3s
transition-timing-function: linear;
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
    -webkit-animation-name:mission-card; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: .5s; /* Safari 4.0 - 8.0 */
    -webkit-animation-timing-function: ease-in;
    // -webkit-animation-delay:1s
    // animation-delay:.5s
      animation-timing-function: ease-in;
      animation-name: mission-card;
      animation-duration: .5s;
      @-webkit-keyframes mission-card {
        from {
            opacity: .1;
            transform: translateX(120px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
      }
      
      /* Standard syntax */
      @keyframes mission-card {
        from {
            opacity: .1;
            transform: translateX(120px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
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