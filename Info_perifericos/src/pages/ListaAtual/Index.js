import hexToRgba from "hex-to-rgba";
import Produto from "../../componentes/Produto/Index";

const ListaAtual = ({aoDeletar, cor='#82CFFA', recebeLista }) => {
    const lista =  JSON.parse(window.sessionStorage.getItem('lista'))


    return (
       <div>
            <h1> Lista {lista.nomeLista}</h1>
            <section className='tipos' style={{backgroundColor: hexToRgba(cor, 0.20) }}>
            
            <h3 style={{borderColor: cor }}>{lista.nomelista}</h3>
            <div className='card'>
            {lista.produtos.map( (produto, indice) =>
                <Produto
                    corDeFundo={cor}
                    key={produto.id + `${indice}`}
                    id={produto.id} 
                    nome={produto.nome} 
                    fabricante={produto.fabricante} 
                    preco = {produto.preco}
                    imagem = {produto.imagem}
                    descricao = {produto.descricao}
                    aoDeletar = {aoDeletar}
                    recebeLista = {recebeLista}
                    obrigatorio 
                />
            )}
            </div>
        </section>
        </div>
    )
}

export default ListaAtual;