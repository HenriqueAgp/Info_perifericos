import Produto from '../Produto/Index';
import './Tipos.css'
import hexToRgba from 'hex-to-rgba';

const Tipos = ({nome, id, cor, aoDeletar, mudarCor, produtos, salvarProdutoNaLista }) => {
    
    return(
        produtos.length > 0 ?<section className='tipos' style={{backgroundColor: hexToRgba(cor, 0.20) }}>
            <input value={cor} onChange= { (evt)=>{ mudarCor(evt.target.value, id) }} type='color'  className='input-color'></input>
            <h3 style={{borderColor: cor }}>{nome}</h3>
            <div className='card'>
                {produtos.map( (valor, indice) => 

                    <Produto corDeFundo={cor} 
                        key={valor.id}
                        id={valor.id} 
                        nome={valor.nome} 
                        fabricante={valor.fabricante} 
                        preco = {valor.preco}
                        imagem = {valor.imagem}
                        descricao = {valor.descricao}
                        aoDeletar = {aoDeletar}
                        salvarProdutoNaLista= {salvarProdutoNaLista}       
                    />
                )}
            </div>
        </section> : ""
    )
}

export default Tipos;