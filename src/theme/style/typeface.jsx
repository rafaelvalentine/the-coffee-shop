import styled from 'styled-components'

export const Header = styled.h1`
    font-size: 3.6rem;
    font-weight: bold;
    color: ${props => props.theme.header};
`;

export const SubHeader = styled.h3`
    font-size: 1.8rem;
    color: ${props => props.theme.lightGray};
`;
SubHeader.defaultProps = {
    padTop: "4rem"
};

export const PageTitle = styled(SubHeader)`
    font-size: 2.4rem;
    color: ${props => props.theme.gray};
`;
export const UpperNav = styled.h4`
    font-size: 1.4rem;
    color: ${props => props.theme.lightGray};
`;
export const MainNav = styled(SubHeader)`
    margin: 0;
    :hover {
        color: ${props => props.theme.blue};
    }
`;
export const Under = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    a {
        color: ${props => props.theme.purple};
    }
`;
export const Button = styled.span`
    text-transform: ${props => (props.main ? "uppercase" : null)};
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.white};
`;
export const Label = styled.span`
    font-weight: 300;
    font-size: 0.8rem;
    color: ${props => props.theme.black};
`;
export const IncrementLabel = styled(Label)`
    text-transform: uppercase;
    font-size: 1rem;
`;
export const BoldLabel = styled(Label)`
    margin-bottom: 0.2rem;
    text-align: ${props => props.textAlign} !important;
    color: ${props =>
        props.alt ? props.theme.lightGray : props.theme.darkGray};
`;
export const PaymentLabel = styled.div`
    padding-left: 1rem;
    color: ${props => props.theme.darkGray};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;
export const PaymentTitle = styled(PaymentLabel)`
    font-size: 1.8rem;
`;
export const Warning = styled.span`
    color: ${props => props.theme.caution};
    font-weight: bold;
    font-size: 12px;
`;
export const Value = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.theme.black};
    opacity: 0.5;
`;
export const CheckBoxLabel = styled(Label)`
    display: inline-block;
    vertical-align: top;

    ::after {
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        transition: all 0.2s ease-in-out;
        border: 1px solid #7b7c7f;
        border-radius: 2px;
        background: #fff;
        color: #fff;
        font: 10px/13px icomoon !important;
        font-variant: normal;
        text-align: center;
        text-transform: none;
        content: "";
    }
`;

export const Number = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
`;
export const CardHeader = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width: 100%;
height: 56px;
border-radius: 4px;
padding: ${props => props.padding ? props.padding : '20px 56px'};
font-style: normal;
font-weight: bold;
font-size: ${props => props.fontSize ? props.fontSize : '12px'};
line-height: 16px;
color: ${props => props.theme.orange};
background-color: ${props => props.altBackground ? props.theme.faintBlue : props.theme.transparent};
`
export const UserHandle = styled(Header)`
font-size: 12px;
line-height: 16px;
color: ${props => props.theme.handleText};
text-transform: capitalize;
margin:0;
`
export const SubHandle = styled(UserHandle)`
margin: 10px 0 0;
color: ${props => props.theme.subHandleText};
`

export const TabHeader = styled.span`
text-transform:uppercase;
padding:  18px 50px;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
border-bottom: 4px solid ${props => props.alt ? props.theme.orange : props.theme.transparent};
color: ${props => props.alt ? props.theme.orange : props.theme.cardName};
transition: .3s;
cursor: pointer;
:hover{
    // border-bottom: 4px solid ${props => props.theme.orange};
    color: ${props => props.theme.orange};
}
`
export const ChatUserName = styled.p`
font-size: 14px;
line-height: 14px;
text-transform: capitalize;
color: #404040;
font-weight: bold;
margin:0;
`
export const ChatStatus = styled(ChatUserName)`
font-size: 10px;
line-height: 10px;
font-weight: normal;
text-transform: inherit;
align-self:${props => props.alt ? 'flex-end' : 'flex-start'}; 
`
export const ChatMessageText = styled(ChatUserName)`
font-weight: normal;
text-transform: inherit;
`
export const ChatMessageLink = styled(ChatUserName)`
font-weight: normal;
font-size: 12px;
line-height: 13px;
text-decoration: underline;
color: #66AAFF;
padding:15px 10px;
background: #fff;
border-radius:4px;
text-align:left;
overflow-wrap: break-word;
word-wrap: break-word;
margin: 8px 0 0;
hyphens: auto;
a{
    text-decoration: none;
}
`
export const NewMessages = styled.div`
font-size: 8px;
line-height: 1;
font-weight: normal;
background: ${props => props.theme.orange};
color:${props => props.theme.white};
border-radius: 50%;
width: 18px;
height: 18px;
text-align:center
display:flex;
justify-content:center;
align-items:center;
`
