import './ListaProdutos.css'
import { Link } from 'react-router-dom';

const ListaProdutos = ({ id, produto }) => {

    return (
        <li>
            <span>R$ {produto.valorEstimado}</span>
            {produto.nome}
            <Link to='/ListaAtual'> ALterar Lista</Link>
            <button onClick={() => { }}>Deletar Lista </button>

        </li>
    )
}

export default ListaProdutos;