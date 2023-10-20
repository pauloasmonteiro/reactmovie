import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { HeaderStyle } from './styles'

export function Header(){
    return(
        <HeaderStyle>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav>
                <Link to='/'>Início</Link>
                <Link to='/filmes'>Filmes</Link>
                <Link to='/series'>Séries</Link>
            </nav>
        </HeaderStyle>        
    )
}