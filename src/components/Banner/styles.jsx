import styled from 'styled-components'
import { device } from '../device'
import freelancer from '../../assets/images/banner.jpg'

export const Jumbotron = styled.section`
    width: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    content: "";
    background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
        ),
        /* bottom, image */ url(${freelancer});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    text-align: end;
    color: #fff;
    @media ${device.mobileS} {
        
        div.text-container {
            margin: 50px 0 0;
            text-align: center;
        }
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: left;
    }
    @media ${device.mobileL} {
        height: 100vh;
    }
    @media ${device.tablet} {
        
        div.text-container {
            margin: 0;
        }
    }
    @media ${device.laptop} {
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        div.text-container {
            margin: 0;
            margin-left: 100px;
            text-align: left;
        }
    }

    -webkit-animation-name:banner; /* Safari 4.0 - 8.0 */
-webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
-webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-name: banner;
  animation-duration: 1s;
  @-webkit-keyframes banner {
    from {
        opacity: .15;
        transform: translateX(1000px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
  }
  
  /* Standard syntax */
  @keyframes banner {
    from {
        opacity: .15;
        transform: translateX(1000px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
  }
`
export const TextWrapper = styled.section`
width:450px
margin:auto 0;
margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
text-align: ${props => props.textAlign ? props.textAlign : 'left'};
align-self:${props => props.alignSelf};
&.animate {
    -webkit-animation-name:banner-text; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 1.4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      animation-name: banner-text;
      animation-duration: 1.4s;
      @-webkit-keyframes banner-text {
        from {
            opacity: .1;
            transform: translateY(120px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
      }
      
      /* Standard syntax */
      @keyframes banner-text {
        from {
            opacity: .1;
            transform: translateY(120px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
      }
}
`
TextWrapper.defaultProps = {
  marginLeft: '100px',
  marginRight: '100px',
  alignSelf: 'flex-'
}
export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
    margin: 0;
    color: ${props => props.altText ? props.theme.title : props.theme.white};
    @media ${device.mobileS} {
        margin-bottom: 8px;
        font-size: 18px;
    }
    @media ${device.laptop} {
        margin-bottom: 24px;
        font-size: 36px;
    }
`
export const Text = styled.p`
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.altText ? props.theme.title : props.theme.white};
    margin: 0;

    @media ${device.mobileS} {
        margin-bottom: 8px;
        padding: 0 45px;
        font-size: 12px;
        line-height: 130%;
        br {
            line-height: 130%;
            display: none;
        }
    }
    @media ${device.tablet} {
        br {
            display: initial;
        }
    }
    @media ${device.laptop} {
        padding: 0;
        margin-bottom: 24px;
        font-size: 18px;
        br {
            display: initial;
        }
    }
`
export const Button = styled.button`
cursor:pointer;
border: transparent;
background: ${props => (props.primary ? '#FD8A25' : 'white')};
color: ${props => (props.primary ? 'white' : '#FD8A25')};
width: 182px;
height: 56px;
border-radius: 4px;
margin:  10px;
text-transform:capitalize;
font-weight:bold;
@media ${device.mobileS}{
  width: 100px;
  height: 46px;
}
@media ${device.laptop}{
  width: 182px;
  height: 56px;
}
`