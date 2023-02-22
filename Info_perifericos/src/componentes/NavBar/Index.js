import './NavBar.css'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Index';



const NavBar = () => {
    function listaNaSecao () {

        let lista = JSON.parse(window.sessionStorage.getItem('lista'))
        if(lista !== null )
        {
           return <li><Link to='/ListaAtual'>  {lista.nomeLista}  </Link></li>
        }else 
        {return '';}

    }

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
                    {listaNaSecao()}
                </ul>
            </nav>
        </>

    )
}

export default NavBar;