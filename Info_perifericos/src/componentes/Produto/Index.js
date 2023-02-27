import './Produto.css';
import {AiFillCloseCircle} from 'react-icons/ai';

const Produto = (props) => {
    const imagem = (img => `./img/perifericos/${img}`)
  
    return(
        <div className='produto' >
            <AiFillCloseCircle size={26} className='deletar' data-id={props.id} onClick={ (evt) => {props.aoDeletar(props.id)}}/>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={imagem(props.imagem)} alt='Imagem do Produto'/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.fabricante}</h5>
                <h5>R$ {props.preco}</h5>
                <p>{props.descricao}</p>               
            </div>
            <button onClick={() => props.salvarProdutoNaLista(props)} hidden={props.obrigatorio}> Salvar na Lista</button>
        </div>
    )
}

export default Produto;