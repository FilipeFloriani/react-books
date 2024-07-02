import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoIcon = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoIcon
                src={logo}
                alt='logo'
            />
            <p><strong>React</strong> BOOKS</p>
        </LogoContainer>
    )
}

export default Logo