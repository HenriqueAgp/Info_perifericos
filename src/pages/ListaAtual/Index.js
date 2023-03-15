import hexToRgba from "hex-to-rgba";
import Produto from "../../componentes/Produto/Index";
import TabelaLista from "../../componentes/TabelaLista/Index";

const ListaAtual = ({ aoDeletar, cor = '#82CFFA', recebeLista, listaLogada }) => {
    return (
        <div>
            <TabelaLista nome={listaLogada.nomeLista} valorEstimado={listaLogada.valorEstimado} produtos={listaLogada.produtos}/>
            <section className='tipos' style={{ backgroundColor: hexToRgba(cor, 0.20) }}>
                <h3 style={{ borderColor: cor }}>{listaLogada.nomeLista}</h3>
                <div className='card'>
                    {listaLogada.produtos.map((produto, indice) =>
                        <Produto
                            corDeFundo={cor}
                            key={produto.id + `${indice}`}
                            id={produto.id}
                            nome={produto.nome}
                            fabricante={produto.fabricante}
                            preco={produto.preco}
                            imagem={produto.imagem}
                            descricao={produto.descricao}
                            aoDeletar={aoDeletar}
                            recebeLista={recebeLista}
                            obrigatorio
                        />
                    )}
                </div>
            </section>
        </div>
    )
}

export default ListaAtual;