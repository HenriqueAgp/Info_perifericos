import Tipos from "../../componentes/Tipos/Index";



const Home = ({ tipos, aoDeletar, mudarCor, produtos, salvarProdutoNaLista }) => {
    return (
        <div>
            <h1> Lista Completa de Produtos </h1>
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