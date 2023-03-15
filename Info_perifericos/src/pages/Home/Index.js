import Tipos from "componentes/Tipos/Index";
import styles from './Home.module.scss';

const Home = ({ tipos, aoDeletar, mudarCor, produtos, salvarProdutoNaLista }) => {
    return (
        <div className={styles.home}>
            <div className={styles.home__titulo}>
            <h1 > Lista Completa de Produtos </h1>
            </div>
            {tipos.map(tipos => <Tipos
                key={tipos.id}
                id={tipos.id}
                nome={tipos.nome}
                cor={tipos.cor}
                aoDeletar={aoDeletar}
                mudarCor={mudarCor}
                salvarProdutoNaLista ={salvarProdutoNaLista}
                produtos={produtos.filter(produto => produto.tipo === tipos.nome)}
            />)}
        </div>
    )
}

export default Home;