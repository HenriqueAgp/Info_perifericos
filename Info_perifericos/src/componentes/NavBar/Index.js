import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom';
import Banner from '../Banner/Index';



const NavBar = ({listaLogada}) => {
    function listaNaSecao () {
        if(listaLogada.id === undefined )
        {
            return '';
        }else 
        {  return <li><Link className={styles.navbar__link} to='/ListaAtual'> Consultar Lista: &nbsp; <span>{listaLogada.nomeLista}</span> </Link></li>
    }
    }

    return (
        <>
            <Banner />
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link className={styles.navbar__link} to='/'> Produtos Cadastrados </Link>
                    </li>
                    <li>
                        <Link className={styles.navbar__link} to='/BuscaProdutos'> Cadastro de Produtos e Listas  </Link>
                    </li>
                     {listaNaSecao()}
                </ul>
            </nav>
        </>

    )
}

export default NavBar;