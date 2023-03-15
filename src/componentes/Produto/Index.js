import styles from './Produto.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

const Produto = (props) => {

    return (
        <div className={styles.produto} >
            <AiFillCloseCircle size={26} className={styles.produto__deletar} data-id={props.id} onClick={(evt) => { props.aoDeletar(props.id, props.obrigatorio) }} />
            <div className={styles.produto__cabecalho} style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt='Imagem do Produto' />
            </div>
            <div className={styles.produto__rodape}>
                <h4>{props.nome}</h4>
                <h5>{props.fabricante}</h5>
                <h5>R$ {(parseFloat(props.preco) / 100).toFixed(2)}</h5>
                <p>{props.descricao}</p>
                <button onClick={() => props.salvarProdutoNaLista(props)} hidden={props.obrigatorio}> Salvar na Lista</button>
            </div>
        </div>
    )
}

export default Produto;