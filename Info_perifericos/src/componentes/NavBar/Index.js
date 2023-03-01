import './NavBar.css'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Index';



const NavBar = ({listaLogada}) => {
    function listaNaSecao () {
        if(listaLogada.id === undefined )
        {
            return '';
        }else 
        {  return <li><Link className='link' to='/ListaAtual'> Consultar Lista: &nbsp; <span>{listaLogada.nomeLista}</span> </Link></li>
    }
    }

    return (
        <>
            <Banner />
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link className='link' to='/'> Produtos Cadastrados </Link>
                    </li>
                    <li>
                        <Link className='link' to='/BuscaProdutos'> Cadastro de produtos e listaProdutos  </Link>
                    </li>
                     {listaNaSecao()}
                </ul>
            </nav>
        </>

    )
}

export default NavBar;