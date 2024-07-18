import styled from 'styled-components'

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 2px solid #FFF;
    padding: 20px 100px;
    border-radius: 30px;
    width: 250px;
    color: #FFF;
    font-size: 16px;
    margin-botton: 10px;

    &::placeholder {
        color: #AAA;
        font-size: 18px;
    }
`

export default Input