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
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/BuscaProdutos'> Todos os Produtos  </Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default NavBar;