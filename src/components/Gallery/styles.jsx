import styled from 'styled-components'

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

export const GalleryCard = styled.div`
width: 250px;
height:250px;
background: ${props => props.theme.transparent};
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
text-align: center;
padding:0;
margin: 0;
border:none;
border-radius: 20px;
`
export const Title = styled.p`
font-size: 40px;
color: ${props => props.theme.title};
line-height: 1;
margin: 30px 0 0;
text-transform: uppercase;
font-weight:700;
`

export const Text = styled.p`
font-size: 12px;
color: ${props => props.theme.title};
line-height: 1;
margin: 30px 0 60px;
text-transform: capitalize;
font-weight: 300;
`