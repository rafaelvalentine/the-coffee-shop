import styled from 'styled-components'
import freelancer from '../../assets/images/WinOS_1080x1920.jpg'
import conffeeOne from '../../assets/images/coffeeOne.jpg'
import conffeeTwo from '../../assets/images/coffeeTwo.jpg'

export const Wrapper = styled.div`
background: ${props => props.theme.background};
height: ${props => props.height ? props.height : '50vh'};
width: 100%;
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
padding:${props => props.padding ? props.padding : '64px 0 '};
`
export const ImageWrapper = styled.div`
position: relative;
width:400px;
height:400px;
border-radius: ${props => props.altPosition ? '50% 50% 50% 0' : '50% 50% 0 50%'};
background: url(${props => props.altPosition ? conffeeTwo : conffeeOne});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: scroll;
`

export const SubDiv = styled.div`
background: ${props => props.theme.yellow};
height:40px;
width:200px;
position:absolute;
bottom:0px;
right:${props => props.altPosition ? '67%' : '-70px'};
border-radius:50px;
-ms-transform: rotate(${props => props.altPosition ? '45deg' : '-45deg'}); /* IE 9 */
-webkit-transform: rotate(${props => props.altPosition ? '45deg' : '-45deg'}); /* Safari prior 9.0 */
transform: rotate(${props => props.altPosition ? '45deg' : '-45deg'}); /* Standard syntax */
opacity: .5;
`