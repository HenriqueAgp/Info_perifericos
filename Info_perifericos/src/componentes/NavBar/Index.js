import './NavBar.css'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Index';



const NavBar = () => {
    return (
        <>
            <Banner />
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/'> Lista de Produtos </Link>
                    </li>
                    <li>
                        <Link to='/BuscaProdutos'> Cadastro de produtos e listaProdutos  </Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default NavBar;