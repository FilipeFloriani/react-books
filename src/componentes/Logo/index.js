import './style.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'
            />
            <p><strong>React</strong> BOOKS</p>
        </div>
    )
}

export default Logo