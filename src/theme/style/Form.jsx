import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Input = styled.input`
    width: ${props => props.width};
    border: none;
    height: 40px;
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;

    font-weight: 300;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    &:focus {
        outline: none;
    }
`
Input.defaultProps = {
  width: '100%'
}

export const Label = styled.label`
    border-bottom: 0.25px solid ${props => props.theme.lightGray};
    width: 100%;
    margin: 1rem 1rem 4rem;
`
export const NoMLabel = styled(Label)`
    margin: 1rem 1rem;
`
export const CheckBoxLabel = styled.label`
    margin: 0;
    cursor: pointer;
    vertical-align: top;
    display: inline-block;
    position: relative;
    padding-left: 24px;
    z-index: 2;
`
export const CheckBox = styled.input`
    color: ${props => props.theme.purple};
    margin-right: 10px;
    position: absolute;
    top: 2px;
    left: 0;
    opacity: 0;

    :checked ~ .checkbox__label:after{
        border-color: #2948ff;
        color: #2948ff;
        content: "\\2713";
    }
`

export const TwoComponentBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1rem;
`
export const AltBox = styled(TwoComponentBox)`
    margin: 0;
`
export const Box = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-top: ${props => props.border};
    width: ${props => props.width};
`
Box.defaultProps = {
  margin: '1rem',
  padding: '1rem'
}
export const NoSpaceBox = styled.div`
    display: flex;
`
export const UnderLinedBox = styled.div`
    border-bottom: 0.5px solid #d4d4d4;
    display: flex;
    padding-top: 2rem;
`
/**
 * Main forms
 */
export const MainInput = styled.input`
    width: ${props => props.width};
    border: ${props => props.border ? props.border : '0.5px solid #54c4cf'};
    border-radius: 2px;
    height: ${props => props.height};
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 0.8rem;
    color: ${props => props.theme.black};

    ::placeholder {
        font-size: 0.8rem;
    }

    &:focus {
        outline: none;
    }
`
MainInput.defaultProps = {
  width: '100%',
  height: '40px'
}
export const NoLabelInput = styled(MainInput)`
    margin: ${props => props.margin};
`
NoLabelInput.defaultProps = {
  margin: '1rem',
  width: '100%'
}
export const MainLabelContainer = styled.label`
    display: block;
    margin: ${props => props.MainLabelContainerMargin ? props.MainLabelContainerMargin : '1rem'};
`
export const UsedCard = styled.div`
    display: flex;
    border-radius: 0.2rem;
    border: 0.1rem solid ${props => props.theme.formBorder};
    padding: 0.8rem 2rem 0.5rem;
    color: ${props => props.theme.gray};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem;
`
export const MainLabel = styled.div`
    margin-bottom: 0.5rem;
`
export const PaymentLabelPair = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const Select = styled.select`
    width: ${props => props.width ? props.width : '100%'};
    border: 0.5px solid #54c4cf;    
    border-radius: 2px !important; 
    height: 48px;
    background: transparent;
    padding-left: 10px;
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 0.8rem;
    color: ${props => props.theme.black};
    :focus{
        outline: none;
    }
`
export const TxtArea = styled.textarea`
    border: 0.5px solid #54c4cf;    
    border-radius: 2px !important;
    width: 100%;
    height: 120px;
    padding: 10px;
    &.textarea-disabled{
        resize: none;
        border: 0.5px solid transparent; 
        font-size: 12px;
        line-height: 16px;
        color: #0D001F;
        :disabled{
            background: transparent;
        }
    }
`
export const NoLabelSelect = styled(Select)`
    margin: ${props => props.margin};
`
NoLabelSelect.defaultProps = {
  margin: '1rem'
}
export const FormContainer = styled.div`
    width: ${props => props.width};
`
export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 4rem;
`
export const TableHead = styled.div`
    width: 80rem;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    padding: 1rem;
    margin-bottom: 1rem;
`
export const Total = styled(TableHead)`
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 1.8rem;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const TableList = styled(TableHead)`
    border: 0.1rem solid ${props => props.theme.formBorder};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    /* font */
    color: ${props => props.theme.darkGray};
    font-weight: bold;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
/**
 *
 * .checkbox__input {
    position: absolute;
    top: 2px;
    left: 0;
    opacity: 0;
}

[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
 *
 *
 * .checkbox__label:after {
    position: absolute;
    top: 3px;
    left: 0;
    width: 14px;
    height: 14px;
    transition: all .2s ease-in-out;
    border: 1px solid #7b7c7f;
    border-radius: 2px;
    background: #fff;
    color: #fff;
    font: 10px/13px icomoon!important;
    font-variant: normal;
    text-align: center;
    text-transform: none;
    content: "";

    .checkbox__input:checked~.checkbox__label:after {
    border-color: #2948ff;
    color: #2948ff;
    content: "\EA10";

 */
