import styled from 'styled-components'

export const Container = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:${props => props.borderRadius};
    border: 1px solid ${props => props.theme.transparent};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.alt ? props.theme.paleGreen : props.theme.white};
    background-color: ${props => props.alt ? props.theme.lightGreen : props.theme.orange};
    transition: .3s;
    display:flex;
    justify-content:center;
    align-items:center;
`
Container.defaultProps = {
  width: '150px',
  margin: '0',
  height: '40px',
  borderRadius: '30px',
  fontSize: '12px'
}

